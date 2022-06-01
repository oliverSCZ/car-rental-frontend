import { useSelector } from 'react-redux';
import CarList from '../components/Cars/CarList';
import Slider from 'react-slick';

const HomePage = () => {
  const cars = useSelector((state) => state.carsReducer);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-10 pt-20">
      <div className="container mx-auto flex flex-col">
        <Slider {...settings}>
          <CarList cars={cars} />
        </Slider>
      </div>
    </div>
  );
};
export default HomePage;
