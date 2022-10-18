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
    FacultyviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
