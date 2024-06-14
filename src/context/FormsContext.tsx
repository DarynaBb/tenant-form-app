import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type FormContextType = {
    isNumberValid: boolean;
    setIsNumberValid: Dispatch<SetStateAction<boolean>>;
};

const FormsContext = createContext<FormContextType | undefined>(undefined);

const FormsContextProvider = ({ children }: { children: ReactNode }) => {
    const [isNumberValid, setIsNumberValid] = useState(false);

    return (
        <FormsContext.Provider value={{ isNumberValid, setIsNumberValid }}>
            {children}
        </FormsContext.Provider>
    );
};

export { FormsContext, FormsContextProvider };
