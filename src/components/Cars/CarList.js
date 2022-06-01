import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const CarList = (props) => {
  let carList = [];
  const { carSelector } = props;
  // console.log(props.cars);
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 1,
    speed: 500,
  };
  const cars = carSelector;
  carList = cars.map((car) => (
    <Link
      key={car.id}
      to={`/car/${car.id}`}
      className="greeting-card border text-black text-2xl p-3 m-3"
    >
      <div>
        <h3 className="font-bold text-center">{car.name}</h3>
        <p className="font-bold text-center">{car.make}</p>
        <p className="font-bold text-center">{car.model}</p>
      </div>
      <div>
        <img
          className="shadow-xl rounded-md"
          src={car.image}
          alt={car.model}
          width="300"
        />
      </div>
    </Link>
  ));
  return (
    <div>
      { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
      <Slider {...settings}>
        {carList}
      </Slider>
    </div>
  );
};

CarList.propTypes = {
  carSelector: PropTypes.shape({
    image: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarList;
