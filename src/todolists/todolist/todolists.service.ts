import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Todo {
  id: string
  addedDate: string
  order: number
  title: string
}

export interface TodoResponse <T=object>{
  data: T
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}



@Injectable({
  providedIn: 'root'
})
export class TodolistsService {

  todos$:BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': `${environment.apiKey}`,
    },
  };

  constructor(private http: HttpClient) { }

  getTodos(){
     this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions).subscribe((todos)=>{
       this.todos$.next(todos)
     })}

  createTodo(title:string)  {
    this.http.post<TodoResponse<{item:Todo}>>(
     `${environment.baseUrl}/todo-lists`, { title }, this.httpOptions)
      .pipe(map((res)=>{
        const newTodo = res.data.item;
        const stateTodos =this.todos$.getValue()
        return [newTodo,...stateTodos]
      }))
      .subscribe((todos)=>{
        this.todos$.next(todos)
    })
  }

  deleteTodo(id:string){
    this.http.delete<TodoResponse>(`${environment.baseUrl}/todo-lists/${id}`,this.httpOptions)
      .pipe(map(()=>{
        return this.todos$.getValue().filter(todo => todo.id !== id);
      }))
      .subscribe((todos)=>{
      this.todos$.next(todos)
    })
  }

}
