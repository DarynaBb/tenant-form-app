type ButtonProps = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
};

function Button({ type, onClick, text, className, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary px-[14px] md:px-[20px] uppercase 
        btn-transition btn-shadow py-[7px] md:py-[10px] border-[1px] 
        rounded-[6px] md:rounded-[10px] text-white 
        ${className} lg:hover:bg-slate-50 border-primary lg:hover:text-primary
      `}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
