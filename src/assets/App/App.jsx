import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from '../Navigation/Navigation.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route exact path="/vite-react/" element={<LandingPage />} />
          <Route exact path="/vite-react/about" element={<LandingPage />} />
          <Route exact path="/vite-react/service" element={<LandingPage />} />
          <Route exact path="/vite-react/work" element={<LandingPage />} />
          <Route exact path="/vite-react/blog" element={<LandingPage />} />
          <Route exact path="/vite-react/contact" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
  </Router>
  );
}

export default App;