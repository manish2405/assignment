import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  
import { MyService } from './myservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  name = 'Angular';  

  dataFromChild:any;
  message:any;
  
  givenNumbers:any=[2,3,10,15,26,35,50,63,82]
  numbers: any;
  answer:any;
  productForm: FormGroup;  


     
  constructor(private fb:FormBuilder, private myService: MyService) {  
     
    this.productForm = this.fb.group({  
      phoneNumber: '',  
      anotherPhoneNumber: this.fb.array([]) ,  
    });  
  }  

  ngOnInit(): void {
    this.myService.currentMessage.subscribe(message=> this.message = message)
        console.log(this.dataFromChild);
  }
    
  anotherPhoneNumber() : FormArray {  
    return this.productForm.get("anotherPhoneNumber") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      anotherPhoneNumber: ''  
    })  
  }  
     
  addQuantity() {  
    this.anotherPhoneNumber().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.anotherPhoneNumber().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }  


  getIndex(data: any){
    let index = data + 1;
    let value = index * index;
    if(value % 2 == 0){
      this.answer = value - 1
    }
    else{
      this.answer = value + 1
    }
  }

  newMessage(data: any) {
    this.myService.changeMessage(data)
  }

}
