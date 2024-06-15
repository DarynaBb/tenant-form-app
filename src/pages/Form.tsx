import { FormEvent, useContext, useEffect, useState } from "react";
import { useMultiStepForm } from "../hooks/useMultistepForm";
import { useNavigate } from 'react-router-dom';
import NameForm from "../components/NameForm";
import EmailForm from "../components/EmailForm";
import NumberForm from "../components/NumberForm";
import Summary from "../components/Summary";
import SalaryForm from "../components/SalaryForm";
import SuccesWindow from "../components/SuccesWindow";
import { FormsContext } from "../context/FormsContext";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import confetti from "https://esm.run/canvas-confetti@1";


type FormData = {
    fullName: string
    email: string
    phone: string
    salary: string
}

const INITIAL_DATA: FormData = {
    fullName: "",
    email: "",
    phone: "",
    salary: "0-1000"
}


function Form() {
    const [data, setData] = useState<FormData>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : INITIAL_DATA;
  });
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();

    const context = useContext(FormsContext);
    if (!context) {
        throw new Error('SomeComponent must be used within a FormsContextProvider');
    }
    const { isEditing, onClickHandler } = context;

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields }
    })
  }
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = 
    useMultiStepForm([
      <NameForm {...data} updateFields={updateFields} />, 
      <EmailForm {...data} updateFields={updateFields}/>, 
      <NumberForm {...data} updateFields={updateFields}/>,
      <SalaryForm {...data} updateFields={updateFields}/>, 
      <Summary {...data} updateFields={updateFields}/>
    ])

    function onSubmit(e:FormEvent) {
        e.preventDefault();
        
        if (!isLastStep) return next();

        if (data.salary === "") {
            alert("Please, select your salary before submitting")
        } else {
          confetti({
            particleCount: 150,
            spread: 200
          });
            setIsFinished(true);
            setData(INITIAL_DATA);
            setTimeout(() => {
                navigate("/");
                setIsFinished(false);
            }, 2000);  
        }
      }

  return (
    <section className="max-container padding-container h-screen">
        <form className={`${isFinished ? "hidden" : "block"} mt-[100px] flex flex-col items-center w-full`} onSubmit={onSubmit} action="">
          <div>
              <ProgressBar steps={steps} currentStepIndex={currentStepIndex} />
          </div>
          <div className="flex flex-col items-start">
            <div className="">
                {step}
            </div>
            <div className="mt-[40px] flex">
                <div className="flex gap-4">
                <Button className={isLastStep ? "block" : "hidden"} type="button" onClick={onClickHandler} text={isEditing ? "done" : "edit"}/>
                  {!isFirstStep && !isEditing && <Button type="button" onClick={back} text="Back"/>}
                  <Button type="submit" text={isLastStep ? "Submit" : "Next"}/>
                </div>
            </div>
          </div> 
        </form>
        <div className={isFinished ? "block" : "hidden"}>
            <SuccesWindow />
        </div>
   </section>
  )
}

export default Form