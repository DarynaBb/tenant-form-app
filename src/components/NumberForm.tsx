import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { useContext, useEffect } from 'react';
import { FormsContext } from '../context/FormsContext';


type UserData = {
    phone: string
}

type NumberFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

function NumberForm({phone, updateFields}: NumberFormProps) {
  const context = useContext(FormsContext);
    if (!context) {
        throw new Error('SomeComponent must be used within a FormsContextProvider');
    }

  const { isNumberValid, setIsNumberValid } = context;

  useEffect(() => {
    setIsNumberValid(isPhoneValid(phone));
  }, [phone])
  
  

  return (
    <>
        <p>Phone number</p>
        <PhoneInput required defaultCountry="de" disableDialCodePrefill={true} placeholder="Enter your phone number" value={phone} onChange={(value) => updateFields({ phone: value })}/>
        {!isNumberValid && <div style={{ color: 'red' }}>Phone is not valid</div>}
    </>
  )
}

export default NumberForm