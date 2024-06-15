import { ReactNode, useContext } from "react"
import { FormsContext } from "../context/FormsContext";

type FormWrapperProps = {
    title: string;
    children: ReactNode
}

function FormWrapper({title, children}:FormWrapperProps) {
    const context = useContext(FormsContext);
    if (!context) {
        throw new Error('SomeComponent must be used within a FormsContextProvider');
    }
    const { isEditing } = context;
  return (  
         <div>
             <h2 className="text-[2rem] open-sans">{title}</h2>
             {children}
         </div>
  )
}

export default FormWrapper