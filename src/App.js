import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [lists, setLists] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const addList = (newList) => {
        setLists([...lists, newList]);
    };

    return (
        <div className="app-container">
            <Sidebar lists={lists} onAddList={addList} />
            <div className="main-content">
                <h2>☀ My Day</h2>
                <TaskInput onAddTask={addTask} />
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}

export default App;
