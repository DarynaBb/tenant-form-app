import { useContext } from "react"
import NumberForm from "./NumberForm"
import NameForm from "./NameForm"
import EmailForm from "./EmailForm"
import SalaryForm from "./SalaryForm"
import { FormsContext } from "../context/FormsContext"

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
  const context = useContext(FormsContext);
    if (!context) {
        throw new Error('SomeComponent must be used within a FormsContextProvider');
    }
    const { isEditing } = context;

  return (
    <section className="w-full">
      <p className="my-[30px] text-[2.2em] open-sans font-bold">Please check your information before submitting</p>
      <div className="flex w-full">
        <div className="w-[80%] flex flex-col gap-3">
          {isEditing ? 
            <NameForm position="summary" fullName={fullName} updateFields={updateFields} /> 
            : 
            <div className="flex gap-2 text-[1.8em]">
              <p className="font-semibold">Name: </p>
              <p>{fullName}</p>
            </div>
          }
          {isEditing ? 
            <EmailForm position="summary" email={email} updateFields={updateFields} />
            : 
            <div className="flex gap-2 text-[1.8em]">
              <p className="font-semibold">Email: </p>
              <p>{email}</p>
            </div>
          }
          {isEditing ? 
            <NumberForm position="summary" phone={phone} updateFields={updateFields}/>
            : 
            <div className="flex gap-2 text-[1.8em]">
              <p className="font-semibold">Phone: </p>
              <p>{phone}</p>
            </div>
          }
          {isEditing ? 
            <SalaryForm position="summary" salary={salary} updateFields={updateFields} />
            : 
            <div className="flex gap-2 text-[1.8em]">
              <p className="font-semibold">Salary: </p>
              <p>{salary} EUR/month</p>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default Summary