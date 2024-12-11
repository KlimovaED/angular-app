import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo, TodolistsService} from './todolists.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';





@Component({
  selector: 'inst-todolist',
  standalone: true,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',

  imports: [NgForOf, FormsModule, NgIf, AsyncPipe],
})
export class TodolistComponent implements OnInit {
  todos$!: Observable<Todo[]> ;
  @Output() sendInputTitleEvent = new EventEmitter<string>();
  title = '';
  errorMessage = '';
  subscription: Subscription = new Subscription();


  constructor(private todoService: TodolistsService) {}

  ngOnInit(): void {
    //подписка
    this.todos$=this.todoService.todos$
    this.getTodos();
  }


  getTodos() {
  this.todoService.getTodos()
    /*.subscribe({
      next: (res: Todo[]) => {
        this.todos = res;
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.statusText;
      },
    });*/ //избавились от подписки
  }

  createTodo() {
    this.sendInputTitleEvent.emit(this.title);
   this.todoService.createTodo(this.title)

   /*  .subscribe(
      {
        next: (res) => {
          const newTodo = res.data.item;
          this.todos.unshift(newTodo);
        },
        error: (err) => {
          this.errorMessage = err.statusText;
        },
      })*/
  }

  deleteTodo(id: string) {
   this.todoService.deleteTodo(id)
     /*.subscribe(
      {
        next: () => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        },
        error: (err) => {
          this.errorMessage = err.statusText;
        }
      }
    )*/
  }
}



