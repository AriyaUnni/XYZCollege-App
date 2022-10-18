import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {

  constructor() { }

  studentData:any=[
    {"name":"Selena","rollno":"40","admissionno":"7890","college":"abc College","department":"Computer Science Engineering","bloodgroup":"A+","dob":"20-10-1992","parentName":"Gomez","parentEmailid":"gomez@gmail.com","guardianName":"Sam","guardianAddress":"Skyline Apartment"},
    {"name":"Taylor","rollno":"41","admissionno":"1234","college":"qwerty College","department":"Mechanical Engineering","bloodgroup":"B+","dob":"03-07-1987","parentName":"Swift","parentEmailid":"swift@gmail.com","guardianName":"tess","guardianAddress":"YDF Apartment"},
    {"name":"Micheal","rollno":"42","admissionno":"4569","college":"abc College","department":"Electronics and Communication Engineering","bloodgroup":"A-","dob":"27-12-1998","parentName":"Jackson","parentEmailid":"jackson@gmail.com","guardianName":"jimmy","guardianAddress":"Novoland Apartment"},
    {"name":"Serena","rollno":"43","admissionno":"2568","college":"xyzz College","department":"Civil Engineering","bloodgroup":"O+","dob":"02-02-1991","parentName":"William","parentEmailid":"williams@gmail.com","guardianName":"santa","guardianAddress":"Assets Apartment"},
    {"name":"Shahrukh","rollno":"44","admissionno":"7593","college":"mnop College","department":"Chemical Engineering","bloodgroup":"A+","dob":"06-05-1995","parentName":"Khan","parentEmailid":"Khan@gmail.com","guardianName":"kim","guardianAddress":"noel Apartment"}
  ]

  ngOnInit(): void {
  }

}
