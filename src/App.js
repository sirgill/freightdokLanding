import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PrivacyPolicy from "./views/company/privacyPolicy/PrivacyPolicy";
import { routes } from "./common/constants";
import TermsOfUse from "./views/company/termsOfUse/TermsOfUse";
import Home from './views/home/Home';
import Pricing from './views/pricing/Pricing';
import DataContext from './providers/context';
import AboutUs from './views/about_us/AboutUs';
import Feature from './views/features/Feature';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';

function App() {
  return (
    <DataContext>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path={routes.privacyPolicy} element={<PrivacyPolicy />} />
              <Route path={routes.useTerms} element={<TermsOfUse />} />
              <Route path={routes.pricing} element={<Pricing />} />
              <Route path={routes.aboutUs} element={<AboutUs />} />
              <Route path={routes.features} element={<Feature />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </DataContext>
  );
}

export default App;
