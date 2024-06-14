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
    salary: ""
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

    const {isNumberValid, setIsNumberValid} = context;
  

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
        } else if (!isNumberValid) {
            alert("Please, enter valid phone number")
        } else {
            setIsFinished(true);
            setData(INITIAL_DATA);
            setTimeout(() => {
                navigate("/");
                setIsFinished(false);
            }, 1500);
             
        }
        
      }

  return (
    <div style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial"
       }}>
          <form className={isFinished ? "hidden" : "block"} onSubmit={onSubmit} action="">
            <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
             <progress
                      aria-label="loading"
                      id="p02g"
                      max={steps.length}
                      value={currentStepIndex + 1}
                      className="mr-[10px] ml-[10px] h-[10px] w-full overflow-hidden bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-[#69CA61]"
                    >{currentStepIndex + 1} / {steps.length}</progress> 
          {currentStepIndex + 1} / {steps.length}  
        </div>
        {step}
        <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end" }}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div> 
      </form>
      <div className={isFinished ? "block" : "hidden"}>
            <SuccesWindow />
        </div>
   </div>
  )
}

export default Form