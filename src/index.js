import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Sidebar from './Sidebar';
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Sidebar />
    <Counter />
  </React.StrictMode>
);


reportWebVitals();
