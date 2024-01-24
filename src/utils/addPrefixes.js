export const addPrefixes = (key, value) => {
    if (typeof value === "string") {
      return "info_" + key;
    } else if (typeof value === "object" && value instanceof FileList) {
      return "file_" + key;
    }
    return key;
  };