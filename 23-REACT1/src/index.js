import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from '../src/chapter4/Clock';
import Book from '../src/chapter4/Book'
import Library from './chapter4/Library';
import reportWebVitals from './reportWebVitals';
import Comment from './chapter5/Comment';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList'
import Counter from './chapter7/Counter';
import Accommodate from './chapter7/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);

reportWebVitals();
