import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CarList from '../components/Cars/CarList';
import store from '../redux/configureStore';

describe('Components testing', () => {
  test('Car list component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CarList />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
