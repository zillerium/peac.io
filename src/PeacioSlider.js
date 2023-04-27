import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
   style={{ position: 'absolute', top: '50%', left: 0, zIndex: 1, cursor: 'pointer' }}

    >
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick  } = props;
  return (
    <div
      className={className}
      onClick={onClick}
	        style={{ position: 'absolute', top: '50%', right: 0, zIndex: 1, cursor: 'pointer'}}

    >
    </div>
  );
};



const PeacioSlider = () => {
	const isMobile = window.innerWidth < 768;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: <PrevArrow   />,	  
    nextArrow: <NextArrow  />	  
  };

  const captionStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };


  return (
          <Slider {...settings}>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/ecommerce.jpg"
                alt="Ecommerce"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Ecommerce</div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/global.jpg"
                alt="Global"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Global</div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/secure.jpg"
                alt="Secure"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Secure</div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/dollars.jpg"
                alt="Stablecoins"
              />
              <div className="carousel-caption">
                <div style={captionStyle}>Stablecoins</div>
              </div>
            </div>
          </Slider>
  );
};

export default PeacioSlider;
