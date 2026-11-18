function Input({ id, type = 'text', value, onChange }) {
  return <input id={id} type={type} className="input" value={value} onChange={onChange} />;
}

export default Input;
