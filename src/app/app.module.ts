import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs'; 
// import { NgxTabModule } from 'ngx-tab-module'
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrideComponent } from './pride/pride.component';
import { PoComponent } from './po/po.component';
import { AllComponent } from './all/all.component';
import { WallComponent } from './wall/wall.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { WertComponent } from './wert/wert.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogininsideComponent } from './login/logininside/logininside.component';
import { DareComponent } from './register/dare/dare.component';
import { RegisterfranchiseComponent } from './register/registerfranchise/registerfranchise.component';
import { RegisterfranchisesComponent } from './register/dare/registerfranchises/registerfranchises.component';
import { PayementComponent } from './register/dare/payement/payement.component';
import { CourselistComponent } from './courselist/courselist.component';
import { PopularityComponent } from './popularity/popularity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profile/profiles/profiles.component';




const appRoutes:Routes=[
  {path:'',component:PrideComponent},
  {path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'registerfranchise',component:RegisterfranchiseComponent},
  {path:'registerfranchises',component:RegisterfranchisesComponent},
  {path:'payement',component:PayementComponent},
  {path:'courselist',component:CourselistComponent},
  {path:'students',component:StudentsComponent},
  {path:'profile',component:ProfileComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    PrideComponent,
    PoComponent,
    AllComponent,
    WallComponent,
    WertComponent,
    FootComponent,
    LoginComponent,
    RegisterComponent,
    LogininsideComponent,
    DareComponent,
    RegisterfranchiseComponent,
    RegisterfranchisesComponent,
    PayementComponent,
    CourselistComponent,
    PopularityComponent,
    StudentsComponent,
    StudentDetailComponent,
    ProfileComponent,
    ProfilesComponent,


  

   
    
  
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgImageSliderModule,
    BrowserAnimationsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
