import React, { useRef, useEffect, useState, } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, fetchUserById } from "./TodoInputSlice"
export const TodoInput = props => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setValue(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo({
            name: value,
        }))
        setValue("");
        inputRef.current.focus()
    }
    return (
        <>
            <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                <div style={{ display: "flex", margin: "auto" }}>
                    <div style={{ marginRight: "10px" }}>
                        Task
                </div>
                    <input ref={inputRef} onChange={handleChange} value={value} style={{ padding: "8px 32px", borderRadius: "2px" }} />
                    <button disabled={!value} style={{ background: !value ? "#9fb2b8" : "blue", marginLeft: "5px", color: "white", fontWeight: "bold", padding: "8px 24px" }}>Submit</button>
                </div>
            </form>
            <button onClick={() => dispatch(fetchUserById())}>fetchUserById</button>
        </>
    )
}