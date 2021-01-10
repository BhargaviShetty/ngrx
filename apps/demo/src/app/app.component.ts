import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './model/todo.model';
import * as TodoActions from './actions/todo.actions';

interface AppState{
  todo: Todo[];
}

@Component({
  selector: 'nx-nrwl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todo: Observable<Todo[]>

  constructor(private store: Store<AppState>){
    this.todo = this.store.select('todo')
  }

  addTask(task,text){
    this.store.dispatch(new TodoActions.Add({task:task,text:text}))
  }

  removeTask(index){
    this.store.dispatch(new TodoActions.Remove(index))
  }
}