import { FloatingBoxContainer } from './style';

export default function FloatingBox({ children, gap }) {
  return (
    <FloatingBoxContainer style={{ gap: `${gap || 0}rem` }}>
      {children}
    </FloatingBoxContainer>
  );
}
