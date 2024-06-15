type InputProps = {
  type: "text" | "email" | "tel";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  label: string;
  position?: string;
};

function Input({
  type,
  placeholder,
  value,
  onChange,
  pattern,
  position,
  label,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label
        className={`${
          position === "summary"
            ? "text-[2em] mb-[10px]"
            : "text-[2em] md:text-[3em] mb-[20px]"
        } open-sans font-semibold `}
      >
        {label}
      </label>
      <input
        className={`${
          position === "summary"
            ? "py-[5px] md:text-[1.2em] px-[5px] min-w-[200px]"
            : ""
          } outline-primary-pale border-[1px] rounded-[6px] border-slate-200 
          py-[10px] md:text-[1.5em] px-[10px] min-w-[200px] md:min-w-[300px]
        `}
        required
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
        {...(position !== "summary" ? { autoFocus: true } : {})}
      />
    </div>
  );
}

export default Input;
