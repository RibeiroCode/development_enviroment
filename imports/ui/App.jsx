import React from 'react';
import { Task } from './Task';

const tasks = [
  {_id: 1, text: 'Primeira Tarefa'},
  {_id: 2, text: 'Segunda Tarefa'},
  {_id: 3, text: 'Terceira Tarefa'},
];
 
export const App = () => (
  <div>
    <h1>Seja bem vindo(a)!</h1>
    <ul>
      { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
  </div>
);
