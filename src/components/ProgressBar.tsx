import { ReactElement, useState } from "react";

type ProgressBarProps = {
    steps: ReactElement[],
    currentStepIndex: number
}

function ProgressBar({steps, currentStepIndex}: ProgressBarProps) {
  return (
    <div className="flex justify-center mb-[50px]">
        <ul className="flex gap-5">
            {steps.map((step, index) => (
                <li className={`${currentStepIndex === index  || currentStepIndex > index ? "bg-primary  text-slate-50" : ""} 
                    bg-transition border-[1px] border-slate-200 rounded-full w-[30px] h-[30px] flex 
                    justify-center items-center relative`} key={index}>
                    <p>{index+1}</p>
                    <span
                        className={`
                            ${index !== steps.length - 1 ? 'absolute w-5 h-[1px]  -right-[20px]' : ''}
                            ${currentStepIndex === index || currentStepIndex > index ? 'bg-primary bg-transition' : 'bg-slate-200'}`}
                    />
                </li>
            ))}    
        </ul> 
    </div>
  )
}

export default ProgressBar