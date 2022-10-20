import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  rollno=""
  admissionno=""
  college=""
  department=""
  bloodgroup=""
  dob=""
  parentName=""
  parentEmailid=""
  guardianName=""
  guardianAddress=""

  status:boolean=false

  readValues=()=>{
    let data={
      "name":this.name,
      "rollno":this.rollno,
      "admissionno":this.admissionno,
      "college":this.college,
      "department":this.department,
      "bloodgroup":this.bloodgroup,
      "dob":this.dob,
      "parentName":this.parentName,
      "parentEmailid":this.parentEmailid,
      "guardianName":this.guardianName,
      "guardianAddress":this.guardianAddress

    }
    console.log(data)

    this.myapi.addStudent(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")
      }
    )

    this.name=""
    this.rollno=""
    this.admissionno=""
    this.college=""
    this.department=""
    this.bloodgroup=""
    this.dob=""
    this.parentName=""
    this.parentEmailid=""
    this.guardianName=""
    this.guardianAddress=""

    this.status=true

    
  }

  ngOnInit(): void {
  }

}
