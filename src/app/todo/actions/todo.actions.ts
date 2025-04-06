import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const addTodo = createAction('[Todo] Add', props<{todo: Todo}>());
export const addTodoSuccess = createAction('[Todo] Add Success', props<{todo: Todo}>());

export const toggleTodo = createAction('[Todo] Toggle', props<{id: number}>());
export const deleteTodo = createAction('[Todo] Delete', props<{id: number}>());