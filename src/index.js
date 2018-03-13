import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import TaskBar from './components/taskbar';
import TaskList from './components/tasklist';

ReactDOM.render(
  <div>
    <Header />
    <TaskBar />
    <TaskList />
  </div>,
  document.getElementById('root'));
