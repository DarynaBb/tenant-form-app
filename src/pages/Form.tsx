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
    const { isNumberValid } = context;
    console.log(isNumberValid)
  

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
    <section className="max-container padding-container">
        <form className={`${isFinished ? "hidden" : "block"} mt-[100px]`} onSubmit={onSubmit} action="">
            <div>
                <ProgressBar steps={steps} currentStepIndex={currentStepIndex} />
            </div>
            <div className="flex justify-center">
                {step}
            </div>
            <div className="flex gap-5">
                {!isFirstStep && <button type="button" onClick={back}>Back</button>}
                <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
            </div> 
        </form>
        <div className={isFinished ? "block" : "hidden"}>
            <SuccesWindow />
        </div>
   </section>
  )
}

export default Form