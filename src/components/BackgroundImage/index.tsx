import { Background } from './styles';
import backgroundImage from '../../assets/background.jpg';

export function BackgroundImage() {
  return (
    <Background bgImage={backgroundImage} strength={600}>
    </Background>
  )
}