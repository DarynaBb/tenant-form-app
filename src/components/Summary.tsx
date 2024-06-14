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
    <section>
      <p>Check your information:</p>
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
      <p onClick={onClickHandler} className="bg-black w-[20px] h-[20px] rounded-full text-white">{isEditing ? "submit" : "edit"}</p>
    </section>
  )
}

export default Summary