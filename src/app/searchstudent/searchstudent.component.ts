import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  admissionno=""

  readValues=()=>{
    let data={
      "name":this.name,
      "admissionno":this.admissionno
    }
    console.log(data)
    this.myapi.searchStudent(data).subscribe(
      (resp)=>{
        this.data=resp

        this.name=""
        this.admissionno=""
      }
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}
