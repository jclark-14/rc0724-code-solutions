import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { GoDotFill, GoDot } from 'react-icons/go';
import { useEffect, useState } from 'react';

type Image = {
  src: string;
  alt: string;
};
type Props = {
  images: Image[];
};

type ImageCardProps = {
  image: Image;
};

type NavDotsProps = {
  images: Image[];
  onClick: (index: number) => void;
  currentIndex: number;
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  function handlePrevClick() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  function handleNavDotClick(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);
    return () => clearTimeout(timerId);
  }, [images.length, currentIndex]);

  return (
    <div className="container">
      <div className="img-nav-row">
        <a href="#">
          <FaAngleLeft size="90px" onClick={handlePrevClick} />
        </a>
        <ImageCard image={images[currentIndex]} />
        <a href="#">
          <FaAngleRight size="90px" onClick={handleNextClick} />
        </a>
      </div>
      <NavDots
        images={images}
        onClick={handleNavDotClick}
        currentIndex={currentIndex}
      />
    </div>
  );
}

function ImageCard({ image }: ImageCardProps) {
  return (
    <div className="img-card">
      <img src={image.src} alt={image.alt} className="img" />
    </div>
  );
}

function NavDots({ images, onClick, currentIndex }: NavDotsProps) {
  const navDots = images.map((image, index) => (
    <a href="#" key={index}>
      {index === currentIndex ? (
        <GoDotFill size="50px" onClick={() => onClick(index)} />
      ) : (
        <GoDot size="50px" onClick={() => onClick(index)} />
      )}
    </a>
  ));
  return <div className="dots-div">{navDots}</div>;
}
