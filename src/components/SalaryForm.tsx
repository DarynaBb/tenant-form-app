type UserData = {
    salary: string;
    position?:string
}

type SalaryFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function SalaryForm({salary, position, updateFields}:SalaryFormProps) {

    const textSize = `${position === "summary" ? "text-[1.6em]" : "text-[2em]"}`
  return (
    <>
        <fieldset className={`flex flex-col ${position==="summary" ? "gap-2" : "gap-5"} min-w-[300px]`}>
            <legend className={`${position === "summary" ? "text-[2em] mb-[10px]" : "text-[3em] mb-[20px]"} open-sans font-semibold`}>
                Salary (per month, EUR)
            </legend>
            <div className={`flex ${position==="summary" ? "gap-2" : "gap-4"}`}>
                <input id="0-1000" type="radio" value="0-1000" checked={salary === "0-1000"} onChange={e => updateFields({salary: e.target.value})} />
                <label className={`${textSize} cursor-pointer`} htmlFor="0-1000">0 - 1.000</label>
            </div>
            <div className="flex gap-4">
                <input id="1000-2000" type="radio" value="1000-2000" checked={salary === "1000-2000"} onChange={e => updateFields({salary: e.target.value})} />
                <label className={`${textSize} cursor-pointer`} htmlFor="1000-2000">1.000 - 2.000</label>  
            </div>
            <div className="flex gap-4">
                <input id="2000-3000" type="radio" value="2000-3000" checked={salary === "2000-3000"} onChange={e => updateFields({salary: e.target.value})}/>
                <label className={`${textSize} cursor-pointer`} htmlFor="2000-3000">2.000 - 3.000</label> 
            </div>
            <div className="flex gap-4">
                <input id="3000-4000" type="radio" value="3000-4000" checked={salary === "3000-4000"} onChange={e => updateFields({salary: e.target.value})}/>
                <label className={`${textSize} cursor-pointer`} htmlFor="3000-4000">3.000 - 4.000</label>  
            </div>
            <div className="flex gap-4">
                <input id="4000more" type="radio" value="more than 4000" checked={salary === "more than 4000"} onChange={e => updateFields({salary: e.target.value})}/>
                <label className={`${textSize} cursor-pointer`} htmlFor="4000more">more than 4.000</label>  
            </div>
        </fieldset>
    </>
    
  )
}

export default SalaryForm