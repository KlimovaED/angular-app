import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValueService {
 //value = 0;
  value$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  add() {
    this.value$.next(this.value$.getValue() + 1)
   // this.value = this.value+1;
  }
  decrement() {
    this.value$.next(this.value$.getValue() - 1)
   // this.value = this.value-1;
  }
}
