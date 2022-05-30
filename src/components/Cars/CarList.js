import { Link } from 'react-router-dom';

const CarList = (props) => {
  const carList = [];
  const { cars } = props;
  // console.log(props.cars);

  cars.forEach((car) => {
    carList.push(
      <Link
        key={car.id}
        to={`/car/${car.id}`}
        className="flex justify-around greeting-card border text-black text-2xl p-3 m-3"
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
      </Link>,
    );
  });
  return carList;
};

export default CarList;
