import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultyview',
  templateUrl: './facultyview.component.html',
  styleUrls: ['./facultyview.component.css']
})
export class FacultyviewComponent implements OnInit {

  constructor() { }

  facultyData:any=[
    {"facultyName":"Antony","department":"Electronics and Communication Engineering","designation":"professor","dob":"03-04-1974","educationalQualification":"phd","address":"netpark hillwayview","mobileNumber":"789456123","dateofJoining":"11-07-2018"},
    {"facultyName":"Simi","department":"Computer Science Engineering","designation":"professor","dob":"03-04-1974","educationalQualification":"MCA","address":"viewPoint partment","mobileNumber":"789456123","dateofJoining":"11-07-2018"},
    {"facultyName":"Sneha","department":"Civil Engineering","designation":"lecturer","dob":"03-04-1974","educationalQualification":"MTech","address":" hillwayview","mobileNumber":"789456123","dateofJoining":"11-07-2018"},
    {"facultyName":"Babu","department":"Mechanical Engineering","designation":"Assistant professor","dob":"03-04-1974","educationalQualification":"BTech","address":"national park","mobileNumber":"789456123","dateofJoining":"11-07-2018"}
  ]

  ngOnInit(): void {
  }

}
