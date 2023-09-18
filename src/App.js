import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greeting from './components/Greeting';
import store from './redux/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Greeting />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
