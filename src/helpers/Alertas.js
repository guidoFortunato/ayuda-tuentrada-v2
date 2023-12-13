import Swal from "sweetalert2";

export const alertaWarning = (text = "Debe ingresar un texto") => {
  Swal.fire({
    icon: "warning",
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    iconColor: "#F7AC08",
  });
};

export const alertTickets = (
  ticket = "",
  dateCreated="",
  status=""
) => {
  Swal.fire({
    icon: "warning",
    allowOutsideClick: false,
    html: ` <div style="text-align: center;">
        <b>Tenes consultas pendientes aún no respondidas<br></b><br>
        <span>Tu número de ticket es: <span style="color: #6bbf59;">${ticket}</span> </span><br><br>        
        <span style="color: #000;">Fue creado el <b>${dateCreated}</b><br></span><br>
        <span style="color: #000;">El status es: <b style="color: #c88449;">${status}</b><br></span><br>
         </div>`,
    // timer: 3000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    // iconColor: "#F7AC08",
  });
};


export const alertSuccessTickets = (
  numberTicket = "",
) => {
  Swal.fire({
    icon: "success",
    allowOutsideClick: false,
    html: ` <div style="text-align: center;">
        <b>Gracias por contactarte<br></b><br>
        <span>Tu número de ticket es: <span style="color: #6bbf59;">${numberTicket}</span> </span><br><br>  
        <small style="font-size: 80%;">Toda la información te llegará por correo electrónico. Puede revisar la carpeta de spam en caso de no recibirlo.</small> </div>`,
    // timer: 3000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    // iconColor: "#F7AC08",
  });
};
