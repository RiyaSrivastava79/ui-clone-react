function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = true,
  className = ''
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
