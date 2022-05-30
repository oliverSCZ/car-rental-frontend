import { useSelector } from 'react-redux';
import CarList from '../components/Cars/CarList';
// import CarSlide from '../components/Cars/CarSlide';

const HomePage = () => {
  const cars = useSelector((state) => state.carsReducer);

  return (
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold mb-6">HOME</h1>
      <div className="container mx-auto flex flex-col">
        <CarList cars={cars} />
      </div>
    </div>
  );
};
export default HomePage;
