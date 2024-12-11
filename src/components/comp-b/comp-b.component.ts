import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../value.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BeautyLoggerService } from '../../beauty-logger.service';

@Component({
  selector: 'inst-comp-b',
  standalone: true,
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
  imports: [AsyncPipe],
})
export class CompBComponent implements OnInit {
  value$ = new Observable();

  constructor(private valueService: ValueService,private beautyLogger: BeautyLoggerService,) {}
  ngOnInit(): void {
    //this.value = this.valueService.value
    //подписка
    /*  this.valueService.value$.subscribe((value:number)=>{
      this.value = value
    })*/
    this.value$ = this.valueService.value$; //не нужно делать отписку
  }

  decValueHandler() {
    this.valueService.decrement();
    this.beautyLogger.log('add value','info')
  }
}
