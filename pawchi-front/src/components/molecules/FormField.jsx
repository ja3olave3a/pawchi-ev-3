import Input from '../atoms/Input';
import Label from '../atoms/Label';

function FormField({ id, label, type, value, onChange }) {
  return (
    <div className="campo">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default FormField;
