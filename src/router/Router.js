import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Homepage from '../pages/Homepage'; 
import Register from '../pages/Register';
import Login from '../pages/Login';
import TodoListPage from '../pages/TodoList';
import Archive from '../pages/Archive';
// Import other pages as necessary

const Router = () => {
  return (
    <ReactRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todolist" element={<TodoListPage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </ReactRouter>
  );
}

export default Router;
