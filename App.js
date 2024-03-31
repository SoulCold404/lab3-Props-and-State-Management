import React, {useState} from 'react';
import ToDoList from './app/ToDoList';
import ToDoForm from './app/ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </>
  );
}
