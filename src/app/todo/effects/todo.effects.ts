import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType  } from "@ngrx/effects";
import { of } from "rxjs";
import { delay, map, mergeMap } from "rxjs";
import * as TodoActions from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions){}

    addTodo$ = createEffect(()=>
        this.actions$.pipe(
            ofType(TodoActions.addTodo),
            delay(500),
            map(action=>TodoActions.addTodoSuccess({todo: action.todo}))
        )
    )
}