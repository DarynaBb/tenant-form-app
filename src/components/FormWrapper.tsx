import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

function FormWrapper({title, children}:FormWrapperProps) {
  return (
        <div className="flex flex-col mt-[50px] w-[50%] items-center">
            <div className="flex flex-col items-start">
                <h2 className=" text-[2rem] open-sans">{title}</h2>
                {children}
            </div>
            
         </div>  
  )
}

export default FormWrapper