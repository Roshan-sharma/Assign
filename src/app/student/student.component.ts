import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  user=new FormControl('',Validators.required);
  pass=new FormControl('',Validators.required);
  list=[];
  stud_usn="";
  password="";

  login()
  {
    if (this.stud_usn.length<=1)
    {
      alert("Empty");
    }
    else
    {
    this.list.push(this.stud_usn);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
