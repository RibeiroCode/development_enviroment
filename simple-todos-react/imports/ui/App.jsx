import React from 'react';

const tasks = [
  {_id: 1, text: 'Primeira Tarefa'},
  {_id: 2, text: 'Segunda Tarefa'},
  {_id: 3, text: 'Third Task'},
];
 
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
