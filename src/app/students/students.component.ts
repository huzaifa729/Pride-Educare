import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id:any="";
   tabChange(ids:any){
     if(this.id==ids){
       this.id='';
     }

     else{
    
      this.id=ids;
}
}


 
}