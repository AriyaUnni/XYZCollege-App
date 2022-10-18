import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor() { }

  facultyName=""
  department=""
  designation=""
  dob=""
  educationalQualification=""
  address=""
  mobileNumber=""
  dateofJoining=""

  status:boolean=false

  readValues=()=>{
    let data={
      "facultyName":this.facultyName,
      "department":this.department,
      "designation":this.designation,
      "dob":this.dob,
      "educationalQualification":this.educationalQualification,
      "address":this.address,
      "mobileNumber":this.mobileNumber,
      "dateofJoining":this.dateofJoining
    }

    this.facultyName=""
    this.department=""
    this.designation=""
    this.dob=""
    this.educationalQualification=""
    this.address=""
    this.mobileNumber=""
    this.dateofJoining=""

    this.status=true

    console.log(data)
  }

  ngOnInit(): void {
  }

}
