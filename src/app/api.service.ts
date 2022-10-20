import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewStudent=()=>{
    return this.http.get("http://localhost:8080/viewstudent")
  }

  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studententry",data)
  }

  deleteStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/deletestudent",data)
  }

  viewFaculty=()=>{
    return this.http.get("http://localhost:8080/viewfaculty")
  }

  addFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/addfaculty",data)
  }

  deleteFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/deletefaculty",data)
  }

  searchStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/searchstudent",data)
  }

  searchFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/searchfaculty",data)
  }

}
