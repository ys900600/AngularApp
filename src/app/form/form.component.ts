import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  result:any;
  data:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.data = history.state.detail;
    console.log(this.data);
  }
   
  

  showResult(){

    this.result=parseInt((<HTMLInputElement>document.getElementById("inputsal")).value)*10;
    this.router.navigate(['/Result'],{state:{data:this.result}});

  }
  
}
