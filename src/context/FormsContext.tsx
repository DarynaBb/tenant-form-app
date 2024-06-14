import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// type FormData = {
//     fullName: string;
//     email: string;
//     phone: string;
//     salary: string;
// };

// const INITIAL_DATA: FormData = {
//     fullName: '',
//     email: '',
//     phone: '',
//     salary: ''
// };

type FormContextType = {
    // data: FormData;
    // updateFields: (fields: Partial<FormData>) => void;
    isNumberValid: boolean;
    setIsNumberValid: Dispatch<SetStateAction<boolean>>;
};

const FormsContext = createContext<FormContextType | undefined>(undefined);

const FormsContextProvider = ({ children }: { children: ReactNode }) => {
    const [isNumberValid, setIsNumberValid] = useState(false);
    // const [data, setData] = useState<FormData>(INITIAL_DATA);

    // const updateFields = (fields: Partial<FormData>) => {
    //     setData(prev => ({ ...prev, ...fields }));
    // };

    return (
        <FormsContext.Provider value={{ isNumberValid, setIsNumberValid }}>
            {children}
        </FormsContext.Provider>
    );
};

export { FormsContext, FormsContextProvider };
