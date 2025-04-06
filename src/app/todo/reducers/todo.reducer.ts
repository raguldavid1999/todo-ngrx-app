import { createReducer, on } from "@ngrx/store";
import * as TodoActions from '../actions/todo.actions';
import { Todo } from "../models/todo.model";

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.addTodoSuccess, (state, {todo})=>[...state, todo]),
    on(TodoActions.toggleTodo, (state, {id})=>
        state.map(todo=>
            todo.id == id ? {...todo, completed: !todo.completed}:todo
        )
    ),
    on(TodoActions.deleteTodo, (state, {id})=>
        state.filter(todo => todo.id !== id)
    )
)