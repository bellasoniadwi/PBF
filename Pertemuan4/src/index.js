import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MahasiswaPost from './container/MahasiswaPost';
// import BlogPost from './container/BlogPost';


const root = ReactDOM.createRoot(document.getElementById('content'));

// Tugas Minggu 2
// const Hello = () => {
//   return <p>Hello</p>
// }

root.render(
  <React.StrictMode>
    <MahasiswaPost />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();