import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Form from './Form/Form';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/form",
    element: <Form />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
