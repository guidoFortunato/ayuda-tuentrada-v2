import { useContext } from "react";
import { FormContext } from "@/context/FormContext";

export const TypeFormRadio = ({ item }) => {
  const { register, errors, watch } = useContext(FormContext);
  const name = item.name.toLowerCase().split(" ").join("_");
  // const optionsSelect = item.options.map((item) => ({
  //   value: item,
  //   label: item,
  // }));

  // const { field } = useController({ name: name, control });

  // const handleSelectChange = (option) => {
  //   field.onChange(option.value);
  // };

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {item.name} { item.required === 1 && <span className="text-red-500">*</span> }
      </label>
      {
        item.options.map( option => (
          <input
            key={option}
            type="radio"
            value={option}
            name={name}
            id={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5"
            placeholder={item.placeholder}
            {...register(name, {
              required: {
                value: item.required === 1 ? true : false,
                message: "Este campo es obligatorio", //`El ${item.name.toLowerCase()} es obligatorio`,
              },
              pattern: {
                value: item.pattern,
                message: item.pattern !== null && `Ingrese un texto válido`,
              },
            })}
          />

        ) )
      }


      {watch(name) ? (
        watch(name).slice(0, 2).toLowerCase() === "ot" ? (
          <>
            <input
              type="text"
              name="otra"
              id="otra"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark  block w-full p-2.5 mt-2"
              placeholder={item.helperText}
              {...register("otra", {
                required: {
                  value: item.required === 1 ? true : false,
                  message: "Este campo es obligatorio",
                },
              })}
            />
            {errors["otra"] && (
              <span className="text-red-600 text-sm block mt-1">
                {errors["otra"].message}
              </span>
            )}
          </>
        ) : null
      ) : null}
      {errors[name] && (
        <span className="text-red-600 text-sm block mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
