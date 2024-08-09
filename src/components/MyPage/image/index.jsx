import defaultProfileSrc from '../../../assets/images/default_profile_8.png';
import { ImageStyled } from './style';

export default function Image({ url }) {
  return <ImageStyled url={url || defaultProfileSrc} />;
}
