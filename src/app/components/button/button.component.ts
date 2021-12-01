import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

//input->take input
//output->show output
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() 
  text!: string;
  @Input()
  color!: string;
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }
}
