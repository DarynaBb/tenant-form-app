import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


type UserData = {
    phone: string
}

type NumberFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

function NumberForm({phone, updateFields}: NumberFormProps) {
  return (
    <>
        <p>Phone number</p>
        <PhoneInput defaultCountry="de" placeholder="Enter your phone number" value={phone} onChange={(value) => updateFields({ phone: value })}/>
    </>
  )
}

export default NumberForm