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
    <section style={{ padding: 0 }}>
      <InputContainer disabled={disabled}>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="bold-18"
          style={{
            width: 'calc(100% - 3.6rem)',
            backgroundColor: disabled
              ? 'var(--color-gray-2)'
              : 'var(--color-primary-light)',
          }}
        />
        {maxLength && (
          <span className="regular-12">
            ({value.length}/{maxLength})
          </span>
        )}
      </InputContainer>
      {status !== 'none' && (
        <Message className={`regular-12 ${message.color}`}>
          {message.content}
        </Message>
      )}
    </section>
  );
}
