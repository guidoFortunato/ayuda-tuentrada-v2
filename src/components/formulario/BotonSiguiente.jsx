import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

export const BotonSiguiente = ({newLengthSteps}) => {
  // console.log({newLengthSteps})
  const { currentStep  } = useContext(FormContext);
  // console.log({currentStep, newLengthSteps})
 
  
  return (
    <>
      {newLengthSteps === (currentStep + 1) ? (
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 w-[150px]"
          onClick={() => console.log("form final enviado")}
        >
          Enviar
        </button>
      ) : (
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-light to-blue-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 w-[150px]"
          // onClick={() => nextStep()}
        >
          Siguiente
        </button>
      )}
    </>
  );
};
