import './App.css';
import { Header } from './Header';
import { ImageCaption } from './ImageCaption';
import { ImageContainer } from './ImageContainer';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';

function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App;
