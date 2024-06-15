import FormWrapper from "./FormWrapper"

type UserData = {
    salary: string
}

type SalaryFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function SalaryForm({salary, updateFields}:SalaryFormProps) {
  return (
    <FormWrapper title="4. Salary">
        <fieldset className="flex flex-col gap-5 mt-[20px]">
            <div className="flex gap-4">
                <input type="radio" value="0-1000" checked={salary === "0-1000"} onChange={e => updateFields({salary: e.target.value})} />
                <label className="text-[1.6em]" htmlFor="">0 - 1.000</label>
            </div>
            <div className="flex gap-4">
                <input type="radio" value="1000-2000" checked={salary === "1000-2000"} onChange={e => updateFields({salary: e.target.value})} />
                <label className="text-[1.6em]" htmlFor="">1.000 - 2.000</label>  
            </div>
            <div className="flex gap-4">
                <input type="radio" value="2000-3000" checked={salary === "2000-3000"} onChange={e => updateFields({salary: e.target.value})}/>
                <label className="text-[1.6em]" htmlFor="">2.000 - 3.000</label> 
            </div>
            <div className="flex gap-4">
                <input type="radio" value="3000-4000" checked={salary === "3000-4000"} onChange={e => updateFields({salary: e.target.value})}/>
                <label className="text-[1.6em]" htmlFor="">3.000 - 4.000</label>  
            </div>
            <div className="flex gap-4">
                <input type="radio" value="more than 4000" checked={salary === "more than 4000"} onChange={e => updateFields({salary: e.target.value})}/>
                <label className="text-[1.6em]" htmlFor="">more than 4.000</label>  
            </div>
        </fieldset>
    </FormWrapper>
    
  )
}

export default SalaryForm