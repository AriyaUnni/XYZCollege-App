import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { FacultyviewComponent } from './facultyview/facultyview.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"add",component:AddstudentComponent
  },
  {
    path:"viewstudent",component:StudentviewComponent
  },
  {
    path:"addfaculty",component:AddfacultyComponent
  },
  {
    path:"viewfaculty",component:FacultyviewComponent
  },
  {
    path:"searchstudent",component:SearchstudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddstudentComponent,
    NavbarComponent,
    StudentviewComponent,
    AddfacultyComponent,
    FacultyviewComponent,
    SearchstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
