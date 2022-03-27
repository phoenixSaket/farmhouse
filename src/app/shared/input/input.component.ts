import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() isTextBox: boolean = false;
  @Output() valueChanges: EventEmitter<string> = new EventEmitter();

  public value: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(event: any) {
    console.log("Input value", event.target.any);
  }

}
