import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.scss']
})
export class FirstchildComponent implements OnInit {

  message:string= 'valid';
  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.myService.currentMessage.subscribe(message=> this.message = message)
  }


  newMessage() {
    this.myService.changeMessage("Hello from First component")
  }


}
