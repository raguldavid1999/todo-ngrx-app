import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectAllTodos = createSelector(selectTodos, (todos)=>todos);

export const selectActiveTodos = createSelector(selectTodos, (todos)=>
    todos.filter((todo)=> !todo.completed)
);

export const selectCompletedTodos = createSelector(selectTodos, (todos)=>
    todos.filter(todo=>todo.completed)
);