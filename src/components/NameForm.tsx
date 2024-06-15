import Input from "./Input";

type UserData = {
    fullName: string;
    position?: string
}

type NameFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function NameForm({fullName, position, updateFields}: NameFormProps) {
  
  return (
    <Input 
          position={position}
          type="text"
          placeholder="Enter your first and last name"
          value={fullName}
          onChange={e => updateFields({ fullName: e.target.value })}
          label="Full name"
    />
  )
}

export default NameForm