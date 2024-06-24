import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './component/MainPage/MainPage';
import SignUp from './component/SignUp/SignUp';
import Form from './component/Form/Form';
import Content from './component/Content/Content'



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path= "/login" element = {<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/form-details" element={<Form />} />
        <Route path="/logout" element={<Content />} />
      </Routes></div>
      </BrowserRouter>
  );
}

export default App;