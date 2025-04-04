import React, { useState } from "react";

function Sidebar({ lists, onAddList }) {
    const [newListName, setNewListName] = useState("");

    const handleAddList = () => {
        if (newListName.trim()) {
            onAddList(newListName);
            setNewListName(""); // Clear the input after adding
        }
    };

    return (
        <div className="sidebar">
            <h3>To Do</h3>
            <ul>
                <li>☀ My Day</li>
                <li>⭐ Important</li>
                <li>📅 Planned</li>
                <li>👤 Assigned to me</li>
                <li>📌 Flagged email</li>
                <li>📂 Tasks</li>
                {lists.map((list, index) => (
                    <li key={index}>{list}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="New list name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                className="new-list-input"
            />
            <button className="new-list-btn" onClick={handleAddList}>
                + New List
            </button>
        </div>
    );
}

export default Sidebar;
