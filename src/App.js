import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import UserContextProvider from './context/UserContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './pages/View';

function App() {
  return (
    <>
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<AddTask></AddTask>}></Route>
        <Route path="/edit/:id" element={<EditTask></EditTask>}></Route>
        <Route path="/view/:id" element={<View></View>}></Route>
      </Routes>
    </UserContextProvider>
    </>
  );
}

export default App;
