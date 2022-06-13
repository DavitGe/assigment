import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import {initialValue} from './initialValue';
import Settings from './pages/Settings';

export default function App() {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    const checkIfDataExists = localStorage.getItem('data');
    if (checkIfDataExists) {
      try {
        const dataFromLocalStorage = JSON.parse(
          localStorage.getItem('data') || JSON.stringify(initialValue)
        );
        setData(dataFromLocalStorage);
      } catch (e: any) {
        alert(e.messge);
      }
    } else {
      localStorage.setItem('data', JSON.stringify(data));
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/settings/:step" element={<Settings data={data} />} />
        <Route path="/" element={<Header data={data} />} />
      </Routes>
    </Router>
  );
}
