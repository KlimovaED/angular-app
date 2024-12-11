import { Injectable } from '@angular/core';

type severityType = 'info' | 'error' | 'success';

@Injectable({
  providedIn: 'root'
})
export class BeautyLoggerService {
  log(message: string,type: severityType) {
    console.log(`%c${message}`, this.getSeverity(type));
  }
  getSeverity(type: severityType) {
    switch (type) {
      case 'error':
        return "color:red";
      case 'success':
          return "color:green";
        case 'info':
          return "color:blue";
      default:
        return ''
    }
  }
}
