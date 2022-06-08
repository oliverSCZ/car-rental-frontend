import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const CarList = (props) => {
  const { cars } = props;
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          centerPadding: '30px',
          className: '',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          centerPadding: '30px',
          className: '',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const carsArray = cars;
  const carList = carsArray.map((car, index) => (
    <div key={car.id} className="container h-full p-2">
      <Link
        key={car.id}
        to={`/car/${car.id}`}
        className="greeting-card border-none text-black text-2xl"
      >
        <div>
          <img
            className="rounded-t-lg m-0 content-center"
            src={car.image}
            alt={car.model}
            width={500}
          />
        </div>
      </Link>
      <div
        div
        className="rounded-b-lg bg-white grid grid-cols-2 shadow-xl"
      >
        <div>
          <h3 className="w-full text-lg text-left font-semibold pl-6 py-2">
            {car.name}
          </h3>
        </div>
        <div>
          <p className="text-sm text-center py-3">
            {car.make}
          </p>
        </div>
        <div className="text-lg text-center font-semibold px-5 py-2 justify-start">
          <StarRating />
        </div>
        <div>
          <p className="text-sm text-center px-5 py-2">
            {car.model}
          </p>
        </div>
      </div>
      <div className="pt-5 text-lg md:hidden lg:hidden">
        <p>
          {index + 1}
          /
          {carsArray.length}
        </p>
      </div>
    </div>
  ));
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>{carList}</Slider>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CarList;
