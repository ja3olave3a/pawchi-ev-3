import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Text from '../atoms/Text';

function FormField({ id, label, error, ...props }) {
  const idError = `${id}-error`;

  return (
    <div className="field">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? idError : undefined}
        {...props}
      />
      {error && (
        <Text as="span" id={idError} role="alert" className="field__error">
          {error}
        </Text>
      )}
    </div>
  );
}

export default FormField;
