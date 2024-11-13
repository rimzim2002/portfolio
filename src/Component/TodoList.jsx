import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import TodoTask from '../Component/TodoTask.css'
const TodoList = () => {
    const [task, setTask] = useState('');
    const [addtask, setAddtask] = useState([]);
    const [editid, setEditid] = useState(false);
    const [currenttask, setCurrentTask] = useState(null);
    const [search, setSearch] = useState('');

    function addHandle() {
        if (editid) {
            setAddtask(addtask.map((item) =>
                item.id === currenttask ? { ...item, value: task } : item
            ));
            setEditid(false);
            setCurrentTask(null);
            setTask('');
        } else {
            const newItem = {
                id: uuidv4(),
                value: task,
                done: false,
            };
            setAddtask([...addtask, newItem]);
            setTask('');
        }
    }

    function deleteHandle(id) {
        setAddtask(addtask.filter((item) => item.id !== id));
    }

    function updateHandle(id, value) {
        setEditid(true);
        setTask(value);
        setCurrentTask(id);
    }

    return (
        <div className="container todo-container bg-light shadow-lg p-4 my-5 rounded">
            <h1 className="text-center text-primary mb-4">Todo List</h1>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control rounded-pill" 
                    value={task} 
                    placeholder="Enter your task" 
                    onChange={(e) => setTask(e.target.value)} 
                />
                <button 
                    type="button" 
                    className="btn btn-primary rounded-pill ms-2" 
                    onClick={addHandle}>
                    {editid ? "Save" : "Add"}
                </button>
            </div>
            <div className="input-group mb-4">
                <input 
                    type="text" 
                    className="form-control rounded-pill" 
                    placeholder="Search your task here" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
            <ul className="list-group">
                {addtask.length ? addtask.filter((itemRes) =>
                    itemRes.value.toLowerCase().includes(search.toLowerCase())).map((item) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center bg-light text-dark rounded mb-2 shadow-sm" key={item.id}>
                            <span className="task-text">{item.value}</span>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn btn-warning btn-sm rounded-pill me-2" 
                                    onClick={() => updateHandle(item.id, item.value)}>
                                    Update
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-danger btn-sm rounded-pill" 
                                    onClick={() => deleteHandle(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ) : 
                    <div className="text-center text-muted">Please Add a Task</div>
                }
            </ul>
        </div>
    );
}

export default TodoList;
