import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  @Input('form') formData: any;
  @Input() name: string
  @Input() item: string
  @Input() desc: string
  constructor() {
    this.name = '',
      this.item = '',
      this.desc = ''
  }

  ngOnInit(): void {
  }

}
