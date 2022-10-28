import React from 'react';

const tasks = [
  {_id: 1, text: 'Primeira Tarefa'},
  {_id: 2, text: 'Segunda Tarefa'},
  {_id: 3, text: 'Terceira Tarefa'},
];
 
export const App = () => (
  <div>
    <h1>Seja bem vindo!</h1>
    <Hello/>
    <Info/>
  </div>
);
