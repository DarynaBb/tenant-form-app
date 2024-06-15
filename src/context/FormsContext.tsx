import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type FormContextType = {
  isNumberValid: boolean;
  setIsNumberValid: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  onClickHandler: () => void;
};

const FormsContext = createContext<FormContextType | undefined>(undefined);

const FormsContextProvider = ({ children }: { children: ReactNode }) => {
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onClickHandler = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  return (
    <FormsContext.Provider
      value={{
        isNumberValid,
        setIsNumberValid,
        isEditing,
        setIsEditing,
        onClickHandler,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
};

export { FormsContext, FormsContextProvider };
