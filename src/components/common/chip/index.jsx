import { chipTheme } from './theme';
import { createElement } from 'react';

export default function Chip({
  children,
  theme = 'default',
  regular = false,
  onClick,
}) {
  return createElement(
    onClick ? 'button' : 'section',
    {
      className: `${regular ? 'regular-12' : 'bold-14'}`,
      style: {
        padding: '0.38rem 1.13rem',
        borderRadius: '62.4375rem',
        ...chipTheme[theme],
      },
      onClick: onClick,
    },
    children,
  );
}
