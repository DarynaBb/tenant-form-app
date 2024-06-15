import FormWrapper from "./FormWrapper"

type UserData = {
    email: string
}

type EmailFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function EmailForm({email, updateFields}:EmailFormProps) {
  return (
    <FormWrapper title="2. Email">
      <input 
      className="outline-primary-pale border-[1px] rounded-[6px] border-slate-200 py-[10px] text-[1.5em] p-[5px]"
      autoFocus 
      required 
      type="email" 
      placeholder="Enter your email" 
      value={email} 
      onChange={e => updateFields({email: e.target.value})}/>
    </FormWrapper>
        
  )
}

export default EmailForm