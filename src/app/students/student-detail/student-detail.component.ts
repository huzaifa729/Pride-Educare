import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   id:any="";
   on(ids:any){
     if(this.id==ids){
       this.id="";
     }
     else{
      this.id=ids;
    }
   }

  
}
