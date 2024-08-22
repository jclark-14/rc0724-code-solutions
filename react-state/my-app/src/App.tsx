import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = [
  '/starry-sky.jpeg',
  '/pexels-pixabay-2150.jpg',
  '/pexels-alex-andrews-271121-816608.jpg',
];
const imageCap = [
  'A Beautiful Image of Space - 1',
  'A Beautiful Image of Space - 2',
  'A Beautiful Image of Space - 3',
];
const imageDescrip = [
  'Description of image of space 1',
  'Description of image of space 2',
  'Description of image of space 3',
];
const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
