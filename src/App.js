import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { getFavorites } from './redux/favorites/favorites';
import { getCars } from './redux/cars/cars';
import CarsList from './redux/components/Cars/CarsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getCars());
  }, []);

  return (
    <div className="App">
      <div className="container-fluid">
          <CarsList />  
      </div>
    </div>
  );
}

export default App;
