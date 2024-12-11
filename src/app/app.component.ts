import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewParentComponent, ParentComponent } from '../components/parent/parent.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeworkComponent } from './homework/homework.component';
import { PipeComponent } from './pipe/pipe.component';
import { CompAComponent } from '../components/comp-a/comp-a.component';
import { CompBComponent } from '../components/comp-b/comp-b.component';
import { TodolistComponent } from '../todolists/todolist/todolist.component';


interface IUser {
  age: number;
  name: string;
}

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [
    FormsModule,
    TodolistComponent
  ],
  templateUrl: './app.component.html',

  styleUrl: './app.component.scss',
})
export class AppComponent {
  public appTitle = 'Instagram';
  user: IUser = {
    age: 32,
    name: 'Ivan',
  };
  isAppLoading = true;
  changeTitleHandler() {
    this.appTitle = 'IT-Incubator';
  }

  text = 'start value';

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value;
  }

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false;
    }, 3000);
  }
}
