import defaultProfileSrc from '../../../assets/images/defaultprofileimage.png';
import { ImageStyled } from './style';

export default function Image({ url }) {
  return <ImageStyled url={url || defaultProfileSrc} />;
}
