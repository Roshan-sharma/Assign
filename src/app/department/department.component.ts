import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  user=new FormControl('',Validators.required);
  pass=new FormControl('',Validators.required);
  list=[];
  username="";
  password="";

  check()
  {
    if (this.username.length<=1)
    {
      alert("Empty");
    }
    else
    {
    this.list.push(this.username);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
