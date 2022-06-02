import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const CarList = (props) => {
  let carList = [];
  const { carSelector } = props;
  // console.log(props.cars);
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 2,
    speed: 500,
  };
  const cars = carSelector;
  carList = cars.map((car) => (
    <div key={car.id} className="p-5 container h-full">
      <Link
        key={car.id}
        to={`/car/${car.id}`}
        className="greeting-card border-none text-black text-2xl p-4 m-3"
      >
        <div>
          <img
            className="rounded-md m-0 content-center"
            src={car.image}
            alt={car.model}
            width="auto"
          />
        </div>
      </Link>
      <div div className="rounded bg-white grid grid-cols-2 gap-4 shadow-xl">
        <div>
          <h3 className="text-lg text-left px-5 py-2.5">{car.name}</h3>
        </div>
        <div>
          <p className="text-lg text-center px-5 py-2.5">{car.make}</p>
        </div>
        <div className="text-lg text-center px-5 py-2.5 justify-start">
          <StarRating />
        </div>
        <div>
          <p className="text-lg text-center px-5 py-2.5">{car.model}</p>
        </div>
      </div>
    </div>
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
