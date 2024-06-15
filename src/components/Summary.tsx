import { useState } from "react"
import NumberForm from "./NumberForm"
import NameForm from "./NameForm"
import EmailForm from "./EmailForm"
import SalaryForm from "./SalaryForm"
import Button from "./Button"



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
    <section className="w-full">
      <p className="my-[30px] text-[2em] open-sans">Check your information:</p>
      <div className="flex w-full">
        <div className="w-[80%] text-[1.6em]">
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
      <Button type="button" onClick={onClickHandler} text={isEditing ? "done" : "edit"}/>
    </section>
  )
}

export default Summary