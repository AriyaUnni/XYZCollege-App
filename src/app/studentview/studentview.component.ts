import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewStudent().subscribe(
      (data)=>{
        this.studentData=data
      }
    )
  }

  deleteStudent=(id:any)=>{
    let data={"id":id}
    this.myapi.deleteStudent(data).subscribe(
      (response)=>
      alert("DELETED")
    )
    this.fetchData()
  }

  studentData:any=[]

  ngOnInit(): void {
  }

}
