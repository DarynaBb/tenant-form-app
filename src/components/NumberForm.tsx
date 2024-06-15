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
      placeholder="Format: 0123-456-78-90"
      value={phone}
      onChange={(e) => updateFields({ phone: e.target.value })}
      pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
      position={position}
    />
  );
}

export default NumberForm;
