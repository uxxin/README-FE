import { buttonTheme } from './theme';
import { ButtonContainer } from './style';

export default function Button({
  name,
  disabled = false,
  type = 'default',
  small = false,
  regular = false,
  onClick,
}) {
  const theme = disabled ? 'disabled' : type;
  const { color, backgroundColor, border } = buttonTheme[theme];
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      className={`${regular ? 'regular-14' : 'medium-16'} ${small && 'small'}
      `}
      color={color}
      bg={backgroundColor}
      border={border}
    >
      {name}
    </ButtonContainer>
  );
}
