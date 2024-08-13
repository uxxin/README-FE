import { InputContainer, Message } from './style';

export default function Input({
  id,
  type,
  value,
  placeholder,
  disabled = false,
  maxLength,
  status = 'none',
  error,
  success,
  warning,
  onChange,
  full = false,
}) {
  const message = {
    content:
      status === 'error' ? error : status === 'success' ? success : warning,
    color:
      status === 'error'
        ? 'danger'
        : status === 'success'
          ? 'success'
          : 'warning',
  };
  return (
    <InputContainer disabled={disabled}>
      <div className={`${disabled && 'disabled'} ${full && 'full'}`}>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="bold-18"
        />
        {maxLength && (
          <span className="regular-12">
            ({value.length}/{maxLength})
          </span>
        )}
      </div>
      {status !== 'none' && (
        <Message className={`regular-12 ${message.color}`}>
          {message.content}
        </Message>
      )}
    </InputContainer>
  );
}
