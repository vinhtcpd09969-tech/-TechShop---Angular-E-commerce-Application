import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: false
})
export class Home {
  // Khai báo dữ liệu nội suy
  studentName: string = 'Trần Công Vinh';
  studentId: string = 'PD09969';
  className: string = 'WD20302';
}