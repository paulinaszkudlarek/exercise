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
          <Route exact path="exercise" element={<LandingPage />} />
          <Route exact path="exerciseabout" element={<LandingPage />} />
          <Route exact path="exerciseservice" element={<LandingPage />} />
          <Route exact path="exercisework" element={<LandingPage />} />
          <Route exact path="exerciseblog" element={<LandingPage />} />
          <Route exact path="exercisecontact" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
  </Router>
  );
}

export default App;