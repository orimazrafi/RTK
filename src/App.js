import React from 'react';
import './App.css';
import { TodoInput } from './features/TodoInput/TodoInput';
import { TodoList } from './features/TodoList/TodoList';
import { Counter } from './features/Counter/Counter';

function App() {

  return (
    <div >
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <TodoInput />
      <TodoList />
      <Counter />
    </div>
  );
}

export default App;
