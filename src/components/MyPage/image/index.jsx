import { ImageStyled } from './style';

export default function Image({ url, small }) {
  return <ImageStyled url={url} className={`${small && 'small'}`} />;
}
