import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {

  @Input() method: any;

  constructor() { }

  ngOnInit(): void {
  }

}
