import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './views/home/Homepage';
import PrivacyPolicy from "./views/company/privacyPolicy/PrivacyPolicy";
import {routes} from "./common/constants";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path={routes.privacyPolicy} element={<PrivacyPolicy />} />
          <Route path='*' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
