import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserById = createAsyncThunk(
    'todo/fetch',
    async () => {
        const url = "https://jsonplaceholder.typicode.com/todos/1"
        return fetch(url)
            .then(res => res.json())
            .then(data =>
                data
            )
    }
)
export const todoInputSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
        error: null
    },
    reducers: {
        addTodo: {
            reducer:
                (state, { payload }) => {
                    state.todoList.push(payload)
                }, prepare: (payload) => {
                    payload.id = payload.length
                    return ({ payload })
                }
        }, edit:
            (state, { payload }) => {
                const index = state.todoList.findIndex(todo => todo.name === payload);
                state.todoList.splice(index, 1)
            },
        error: (state, { payload }) => {
            state.error = payload
        },
        loading: (action, { payload }) => {
            action.loading = payload
        }
    },
    extraReducers: {
        [fetchUserById.fulfilled]: (state, { payload }) => {
            state.todoObject = payload;
            state.loading = false
        },
        [fetchUserById.pending]: (state) => {
            state.loading = true
        },
        [fetchUserById.rejected]: (state, action) => {
            state.error = action.error.message
            state.loading = false

        }
    }
})
export const { addTodo, edit, error, loading } = todoInputSlice.actions;
export const editAsync = (name) => dispatch => {
    try {
        setTimeout(() => {
            dispatch(edit(name))
        }, 1000)
    } catch (ex) {
        dispatch(error(ex.message))
    } finally {
        dispatch(loading(false))
    }
}
export const todoCount = state => state.todo.todoList.length
export default todoInputSlice.reducer