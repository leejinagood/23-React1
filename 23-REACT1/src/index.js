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
import Toggle from './chapter8/Toggle'
import MyButton from './chapter8/MyButton'
import ConfirmButton from './chapter8/ConfirmButton'
import LoginControl from './chapter9/LoginControl'
import SignUp from './chapter10/SignUp';
import AttendanceBook from './chapter10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);

reportWebVitals();
