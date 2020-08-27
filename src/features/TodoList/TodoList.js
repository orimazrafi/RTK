import React from 'react';
import { todosArray } from "./TodoListSlice"
import { useSelector, useDispatch } from "react-redux"
import { editAsync } from "../TodoInput/TodoInputSlice"
export const TodoList = props => {
    const todos = useSelector(todosArray)
    const dispatch = useDispatch()
    return (
        <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
                {todos.map(todo => <div key={Math.random()} style={{ color: "black" }}>
                    {todo.id}. <b>{todo.name}</b><button onClick={() => dispatch(editAsync(todo.name))}>Edit</button>
                </div>)}
            </div>
        </div>
    )
}