type UserData = {
    email: string
}

type EmailFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function EmailForm({email, updateFields}:EmailFormProps) {
  return (
    <>
        <label htmlFor="">Email</label>
        <input autoFocus required type="text" placeholder="Enter your email" value={email} onChange={e => updateFields({email: e.target.value})}/>
    </>
  )
}

export default EmailForm