import Carousel from 'react-bootstrap/Carousel';

export function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          src="./Images/im4.jpg" 
          alt="First slide"
          width="1440px"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Your Journey Begins Here..Book your Flight now!!!..</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src="./Images/im1.jpg" 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover your next Dream Destination...</h3>
          <p>Book your flight with us now!!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src="./Images/i14.jpg" 
          alt="First slide"
      />
        <Carousel.Caption>
          <h3>Let the Journey begin, Sky is waiting for you..</h3>
          <p>
            Book tickets now & fly!!..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


