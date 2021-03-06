import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() status: number;
  @Output() changeStatus: EventEmitter<number>
  constructor() {
    this.status = 0;
    this.changeStatus = new EventEmitter();
  }
  ngOnInit(): void {
  }
  onChangeStatus(newStatus: number) {
    // output 3: mang dữ liệu về cho component cha qua emit
    this.changeStatus.emit(newStatus);
  };
}
