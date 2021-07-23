import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import TaskList from './components/TaskList';
import ProfileSelect from './components/ProfileSelect';
import CreateProfile from './components/CreateProfile';
import TaskForm from './components/TaskForm';

const tasks = [{ id: '', name:'task1' }]

// const addTask = task => {
//   const newTask = [...tasks, task];
//   setTasks(newTask)
// }

function App() {
  return (
  <Router>
    <div className="App">

     <NavBar />
        {/* <Switch> */}
     <CreateProfile />
     <TaskForm />
     <TaskList tasks={ tasks }/>
     <ProfileSelect />
        {/* </Switch> */}
    </div>
  </Router>
  );
}

export default App;
