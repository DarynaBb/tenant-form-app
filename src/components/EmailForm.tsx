import Input from "./Input";

type UserData = {
    email: string;
    position?: string
}

type EmailFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function EmailForm({email, position, updateFields}:EmailFormProps) {
  return (
    
         <Input
            position={position}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
            className={position === "summary" ? "text-[1.2em] mb-[10px]" : ""}
            label="Email"
          />

  )
}

export default EmailForm