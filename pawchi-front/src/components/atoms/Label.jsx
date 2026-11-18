function Label({ children, className = '', ...props }) {
  return (
    <label className={`label ${className}`.trim()} {...props}>
      {children}
    </label>
  );
}

export default Label;
