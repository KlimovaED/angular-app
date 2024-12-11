import { Component } from '@angular/core';
import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'inst-pipe',
  standalone: true,
  templateUrl: './pipe.component.html',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe],
  styleUrl: './pipe.component.scss',

})
export class PipeComponent {
  title = 'Learm pipe';
  url = 'https://angular.dev/api/common/';
  date: Date = new Date();



}
