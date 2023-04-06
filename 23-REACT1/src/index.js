import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from '../src/chapter4/Clock';
import reportWebVitals from './reportWebVitals';
import Comment from './chapter5/Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comment />
  </React.StrictMode>
);

reportWebVitals();
