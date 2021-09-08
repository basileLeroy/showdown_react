import {useEffect, useRef, useState} from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

const Input = () => {
    const arrayOfTodos = [
        {name: 'make array of todos', state: true, id: 1},
        {name: 'fill array', state: false, id: 2},
    ]
    const newTodo = useRef();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) {
            setTodos(storedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    const handleAddTodo = () => {
        const name = newTodo.current.value;
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false }]
        })
        newTodo.current.value = null;
    }
    return (
        <>
            <div className="col-lg d-flex justify-content-center">
                <div className="col-sm-12 d-flex justify-content-center">
                    <input className="inputbox input-group input-group-sm-3" ref={newTodo} type="text"  placeholder="Write a new todo" />
                    <button className="btn btn-outline-success .btn-lg" onClick={handleAddTodo} id="add">Add</button>
                </div>
            </div>
        < />
    );
}

export {Input};