import React, { useState } from 'react'
import "./App.css"
//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import TaskList from './components/TaskList.jsx';
import { Button } from '@mui/material';
import { SquarePlus, PencilOff } from 'lucide-react';
import TaskInput from './components/TaskInput.jsx';
import { useSelector } from 'react-redux';

function App() {
  const tasks = useSelector((state) => state.todos)
  const [isTaskInputVisible, setIsTaskInputVisible] = useState(false)
  const showTaskInput = () => {
    setIsTaskInputVisible(!isTaskInputVisible)
  }

  return (
    <>
      <main className="app-container">
        {tasks?.length == 0 ? <h2>No Tasks</h2> : <h2>Task List</h2>}
        <TaskList />
        {isTaskInputVisible && <TaskInput autofocus={true} />}
        <Button
          variant="contained"
          startIcon={isTaskInputVisible ? <PencilOff /> : <SquarePlus />}
          onClick={showTaskInput}
        >{isTaskInputVisible ? "Cancel" : "Add Task"}</Button>
      </main>
    </>
  )
}

export default App