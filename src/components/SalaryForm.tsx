type UserData = {
    salary: string
}

type SalaryFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function SalaryForm({salary, updateFields}:SalaryFormProps) {
  return (
    <fieldset>
        <legend>Salary (per month, EUR):</legend>
        <div>
            <input type="radio" value="0-1000" checked={salary === "0-1000"} onChange={e => updateFields({salary: e.target.value})} />
            <label htmlFor="">0 - 1.000</label>
        </div>
        <div>
            <input type="radio" value="1000-2000" checked={salary === "1000-2000"} onChange={e => updateFields({salary: e.target.value})} />
            <label htmlFor="">1.000 - 2.000</label>  
        </div>
        <div>
            <input type="radio" value="2000-3000" checked={salary === "2000-3000"} onChange={e => updateFields({salary: e.target.value})}/>
            <label htmlFor="">2.000 - 3.000</label> 
        </div>
        <div>
        <input type="radio" value="3000-4000" checked={salary === "3000-4000"} onChange={e => updateFields({salary: e.target.value})}/>
            <label htmlFor="">3.000 - 4.000</label>  
        </div>
        <div>
        <input type="radio" value="More than 4000" checked={salary === "More than 4000"} onChange={e => updateFields({salary: e.target.value})}/>
            <label htmlFor="">More than 4.000</label>  
        </div>
    </fieldset>
  )
}

export default SalaryForm