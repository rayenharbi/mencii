import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductSlider = ({ images }) => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Product Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductSlider;
