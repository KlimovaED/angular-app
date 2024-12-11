import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Adress } from '../parent.component';
import { NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface Grade {
  math:number;
  physic:number;
}

@Component({
  selector: 'inst-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  imports: [NgStyle, ReactiveFormsModule, FormsModule],
})
export class ChildComponent {
  name = 'Victor';
  @Input() lastNameProps?: string;
  @Input() address?: Adress;

  @Output() sendGradeEvent = new EventEmitter<Grade>();
  sendGradeHandler() {
    const math = 5;
    const physic = 4;
    this.sendGradeEvent.emit({ math, physic });
  }

  @Output() sendInputGradeEvent = new EventEmitter<string>();
  inputGrade = ''
  sendInputGradeHandler() {
    this.sendInputGradeEvent.emit(this.inputGrade);
  }
}
