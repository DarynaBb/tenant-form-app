type ButtonProps = {
    type: 'button' | 'submit' | 'reset'; 
    onClick?: () => void; 
    text: string; 
    className?: string; 
    disabled?: boolean; 
  };

function Button({type, onClick, text, className, disabled}:ButtonProps) {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`bg-primary px-[20px] uppercase btn-transition btn-shadow py-[10px] border-[1px] rounded-[10px] text-white ${className} hover:bg-slate-50 border-[1px] border-primary hover:text-primary`}
    disabled={disabled}
  >
    {text}
  </button>
  )
}

export default Button