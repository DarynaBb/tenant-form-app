import { useState } from "react"
import NumberForm from "./NumberForm"
import NameForm from "./NameForm"
import EmailForm from "./EmailForm"
import SalaryForm from "./SalaryForm"


type UserData = {
  fullName: string,
  email: string,
  phone: string,
  salary: string
}

type SummaryDataProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}



function Summary({fullName, email, phone, salary, updateFields}: SummaryDataProps) {
  const [isEditing, setIsEditing] = useState(false);

  const onClickHandler = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  return (
    <section className="w-full text-center">
      <p className="my-[30px] text-[2em] open-sans">Check your information:</p>
      <div className="flex justify-center w-full">
      <div className="w-[80%] flex flex-col items-center">
      {isEditing ? 
        <NameForm fullName={fullName} updateFields={updateFields} /> 
        : 
        <p>Full name: {fullName}</p>
      }
      {isEditing ? 
        <EmailForm email={email} updateFields={updateFields} />
        : 
        <p>Email: {email}</p>
      }
      {isEditing ? 
        <NumberForm phone={phone} updateFields={updateFields}/>
        : 
        <p>Phone number: {phone}</p>
      }
      {isEditing ? 
        <SalaryForm salary={salary} updateFields={updateFields} />
        : 
        <p>Salary: {salary}</p>
      }
      </div>
      </div>
      
      <button type="button" onClick={onClickHandler} className="bg-primary px-[16px] py-[8px] rounded-[8px] text-white">{isEditing ? "done" : "edit"}</button>
      
    </section>
  )
}

export default Summary