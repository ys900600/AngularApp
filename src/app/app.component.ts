import { Component } from '@angular/core';
import { Router } from '@angular/router';
export class HomeLoan{
  constructor(
public detail:string){};
}

export class PersonalLoan{
  constructor(
public detail:string){};
}

export class CarLoan{
  constructor(
public detail:string){};
}

export class EducationLoan{
  constructor(
    public detail:string ,){};
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoanApplication';
  

  homeLoan:HomeLoan;
  personalLoan:PersonalLoan;
  educationLoan:EducationLoan;
  carLoan:CarLoan;

  constructor(private router:Router){
    
   // this.student=[new Student("Abhimanyu")];
    this.homeLoan=new HomeLoan("Home Loan");
    this.personalLoan=new PersonalLoan("Personal Loan ");
    this.educationLoan=new EducationLoan("Education Loan");
    this.carLoan=new CarLoan("Car Loan");
  };



  gotoHomeLoan(){
    this.router.navigate(['/HomeLoan'], {state:this.homeLoan});
  }

  gotoPersonalLoan(){

    this.router.navigate(['/PersonalLoan'],{state:this.personalLoan});
  }

  gotoCarLoan(){

    this.router.navigate(['/CarLoan'],{state:this.carLoan});

  }

  gotoEducationLoan(){

    this.router.navigate(['/EducationLoan'],{state:this.educationLoan});

  }

}


