import { FormEvent, useEffect, useState } from "react"
import { useMultiStepForm } from "../hooks/useMultistepForm"
import NameForm from "../components/NameForm"
import EmailForm from "../components/EmailForm"
import NumberForm from "../components/NumberForm"
import Summary from "../components/Summary"
import SalaryForm from "../components/SalaryForm"

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
      <Summary {...data} />

    ])

    function onSubmit(e:FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        alert ("Successfull Account Creation")
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
          <form onSubmit={onSubmit} action="">
            <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
            {/* <ul style={{display: "flex"}}>
                        {steps.map((step, index) => (
                          <li key={index}  className="">{index + 1}</li>
                        ))}
                      </ul> */}
                    
        </div>
        {step}
        <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end" }}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div> 
      </form>
   </div>
  )
}

export default Form