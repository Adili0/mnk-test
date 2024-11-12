import React from "react";
import Home from './Components/Home';
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import MovieDetails from "./Components/MovieDetails";
import LoginPage from "./Components/LoginPage";


const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>

      <Header />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="moviedetails/:id" element={<MovieDetails/>} />
      </Routes>
    </Provider>
      
    </BrowserRouter>
  );
};

export default App;
