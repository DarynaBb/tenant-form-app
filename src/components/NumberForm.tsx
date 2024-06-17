import Input from "./Input";

type UserData = {
  phone: string;
  position?: string;
};

type NumberFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function NumberForm({ phone, position, updateFields }: NumberFormProps) {
  return (
    <Input
      label="Phone"
      type="tel"
      placeholder="Format: 01234567890"
      value={phone}
      onChange={(e) => updateFields({ phone: e.target.value })}
      pattern="[0-9]{11}"
      position={position}
    />
  );
}

export default NumberForm;
