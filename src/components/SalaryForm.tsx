type UserData = {
  salary: string;
  position?: string;
};

type SalaryFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const salaryRanges = [
  { id: "0-1000", value: "0-1000", label: "0 - 1.000" },
  { id: "1000-2000", value: "1000-2000", label: "1.000 - 2.000" },
  { id: "2000-3000", value: "2000-3000", label: "2.000 - 3.000" },
  { id: "3000-4000", value: "3000-4000", label: "3.000 - 4.000" },
  { id: "4000more", value: "more than 4000", label: "more than 4.000" },
];

function SalaryForm({ salary, position, updateFields }: SalaryFormProps) {
  const textSize = `${
    position === "summary" ? "text-[1.2em]" : "text-[1.4em] md:text-[2em]"
  }`;

  return (
    <>
      <fieldset
        className={`flex flex-col ${
          position === "summary" ? "gap-2" : "gap-2 md:gap-5"
        } min-w-[200px] md:min-w-[300px]`}
      >
        <legend
          className={`${
            position === "summary"
              ? "text-[1.4em] mb-[10px]"
              : "text-[2em] md:text-[3em] mb-[20px]"
          } open-sans font-semibold`}
        >
          Salary (per month, EUR)
        </legend>

        {salaryRanges.map((range) => (
          <div
            key={range.id}
            className={`flex items-center ${
              position === "summary" ? "gap-2" : "gap-4"
            }`}
          >
            <input
              id={range.id}
              type="radio"
              value={range.value}
              checked={salary === range.value}
              onChange={(e) => updateFields({ salary: e.target.value })}
            />
            <label className={`${textSize} cursor-pointer`} htmlFor={range.id}>
              {range.label}
            </label>
          </div>
        ))}
      </fieldset>
    </>
  );
}

export default SalaryForm;
