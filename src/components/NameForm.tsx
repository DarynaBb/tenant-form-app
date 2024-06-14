import FormWrapper from "./FormWrapper"

type UserData = {
    fullName: string
}

type NameFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function NameForm({fullName, updateFields}: NameFormProps) {
  return (
    <FormWrapper title="Full name">
      <input 
          className="outline-primary-pale border-[1px] rounded-[6px] border-slate-200 py-[10px] text-[1.5em] p-[5px]" 
          autoFocus 
          required 
          type="text" 
          placeholder="Enter your full name" 
          value={fullName} 
          onChange={e => updateFields({fullName: e.target.value})}/>
    </FormWrapper>
        
                                
    
  )
}

export default NameForm