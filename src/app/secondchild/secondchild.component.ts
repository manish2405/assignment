import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.scss']
})
export class SecondchildComponent implements OnInit {

  message:string= 'secondChild';
  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.myService.currentMessage.subscribe(message=> this.message = message)

  }

  newMessage() {
    this.myService.changeMessage(`Hello from Second child`)
    // this.myService.changeMessage(`Hello from ${this.message}`)
  }

}
