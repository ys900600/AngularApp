import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit(): void {

    this.data=history.state.data;
    console.log(history.state.data);
  }
  

}
