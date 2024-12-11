import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../value.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BeautyLoggerService } from '../../beauty-logger.service';

@Component({
  selector: 'inst-comp-a',
  standalone: true,
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.scss',
  imports: [AsyncPipe],
})
export class CompAComponent implements OnInit {
  //value = 0
  value$ = new Observable();
  constructor(
    private valueService: ValueService,
    private beautyLogger: BeautyLoggerService,
  ) {}
  ngOnInit(): void {
    //this.value = this.valueService.value
    //подписка
    /*  this.valueService.value$.subscribe((value:number)=>{
      this.value = value
    })*/
    this.value$ = this.valueService.value$; //не нужно делать отписку
  }

  addValueHandler() {
    this.valueService.add();
this.beautyLogger.log('add value','success')
  }
}
