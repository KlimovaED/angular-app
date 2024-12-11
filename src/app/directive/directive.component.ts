import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

export interface LessonsGardes{
  id: number;
  title: string;
  weekGrades:WeekGrades[]
}
 interface WeekGrades{
  id: number;
  grade:number
}

@Component({
  selector: 'inst-directive',
  standalone: true,
  templateUrl: './directive.component.html',
  imports: [NgForOf, NgIf],
  styleUrl: './directive.component.scss',
})
export class DirectiveComponent {
  array: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  lessons: LessonsGardes[] = [
    {
      id: 0,
      title: 'english',
      weekGrades: [
        {
          id: 1,
          grade: 5,
        },
        { id: 2, grade: 4 },
      ],
    },
    {
      id: 1,
      title: 'itagliano',
      weekGrades: [
        {
          id: 1,
          grade: 5,
        },
        { id: 2, grade: 4 },
      ],
    },
  ];

  isLoading = true;
  constructor() {
    setTimeout(()=>{
      this.isLoading = false;
    }, 3000);
    }
}
