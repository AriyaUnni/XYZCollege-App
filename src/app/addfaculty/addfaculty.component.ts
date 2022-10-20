import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }

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

    console.log(data)
    this.myapi.addFaculty(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")
      }
    )

    this.facultyName=""
    this.department=""
    this.designation=""
    this.dob=""
    this.educationalQualification=""
    this.address=""
    this.mobileNumber=""
    this.dateofJoining=""

    this.status=true

   
  }

  ngOnInit(): void {
  }

}
