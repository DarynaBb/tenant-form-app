type UserData = {
    fullName: string
}

type NameFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function NameForm({fullName, updateFields}: NameFormProps) {
  return (
    <div>
        <label htmlFor="">Full name</label>
        <input autoFocus required type="text" placeholder="Enter your full name" value={fullName} onChange={e => updateFields({fullName: e.target.value})}/>
    </div>
  )
}

export default NameForm