function InputField({ label, value, onChange, placeholder, type = 'text', required = false }) {
  return (
    <label className="field-wrap">
      <span className="field-label">
        {label}
        {required ? '*' : ''}
      </span>
      <input
        className="field-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

export default InputField;
