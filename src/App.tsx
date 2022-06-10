import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/settings/:step" element={<Settings />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}
