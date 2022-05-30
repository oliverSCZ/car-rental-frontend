import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { getFavorites } from './redux/favorites/favorites';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Navigation />
        </div>
        <div className="col-md-9">
          <div className="d-flex flex-column g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="justify-center border">
              <p className="page-title">Cars</p>
              <p className="sub-title">Sheer driving pleasure</p>
            </div>
            <div className="d-flex flex-row">
              <Routes>
                <Route
                  path="/favourites/:user_id/"
                  element={<MyAppointments />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
