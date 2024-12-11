import { Component } from '@angular/core';
import { ChildComponent, Grade } from './child/child.component';
import {
  JsonPipe,
  NgClass,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Adress {
  city: string;
  street: string;
  house:number
}

@Component({
  selector: 'inst-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  imports: [ChildComponent, JsonPipe],
  styleUrl: './parent.component.scss',
})

export class ParentComponent {
  name = 'Ivan';
  lastName = 'Petrov';
  address: Adress = {
    city: 'Minsk',
    street: 'Lenina',
    house: 49,
  };
  math?: number;
  physic?: number;
  getGrade(value: Grade) {
    this.math = value.math;
    this.physic = value.physic;
  }

  grades: string[] = ['math:5', 'english:3'];

  getInputGrade(grade: string) {
    this.grades.push(grade);
  }
}

@Component({
  selector: 'inst-new-parent',
  standalone: true,
  templateUrl: './newparent.component.html',
  styleUrl: './parent.component.scss',
  styles: [
    `
      .class1 {
        color: red;
        font-size: 20px;
      }

      .class2 {
        background-color: blue;
        padding: 10px;
      }
    `,
  ],
  imports: [
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
  ],
})
export class NewParentComponent {
  value = '';
  isClass2 = true;

  constructor() {
    setTimeout(() => {
      this.isClass2 = false;
    }, 3000);
  }
}
