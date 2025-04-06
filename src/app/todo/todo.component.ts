import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import * as TodoActions from './actions/todo.actions';
import * as fromSelectors from './selectors/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private store: Store){}

  todo$: Observable<Todo[]> = this.store.select(fromSelectors.selectAllTodos);
  activeTodo$: Observable<Todo[]> = this.store.select(fromSelectors.selectActiveTodos);
  completedTodo$: Observable<Todo[]> = this.store.select(fromSelectors.selectCompletedTodos);

  newTodo: string = '';

  addTodo(){
    if(this.newTodo.trim()){
      const todo: Todo = {
        id: Date.now(),
        title: this.newTodo,
        completed: false
      };

      this.store.dispatch(TodoActions.addTodo({todo}));
      this.newTodo = '';
    }
  }

  toggleTodo(id: number){
    this.store.dispatch(TodoActions.toggleTodo({id}));
  }

  deleteTodo(id: number){
    this.store.dispatch(TodoActions.deleteTodo({id}));
  }

  todoTrackBy(index:number, todo:any){
    return todo.id;
  }
}
