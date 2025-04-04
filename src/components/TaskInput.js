import React, { useState } from "react";

function TaskInput({ onAddTask }) {
    console.log("onAddTask:", onAddTask); // Debugging line
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        onAddTask(task); // Calls the function passed as a prop
        setTask("");
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a task" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskInput;
