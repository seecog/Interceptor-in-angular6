import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { MyIntercptor } from './my.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { TestComponent } from './test/test.component';
import { EduComponent } from './edu/edu.component';
import { HealthComponent } from './health/health.component';
import { TriangleComponent } from './triangle/triangle.component';
import { ProductsComponent } from './products/products.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CalculatorService } from './providers/calculator.service';
import { Test2Component } from './test2/test2.component';
import { Perimeter } from './providers/perimeter.service';
import { TriangleService } from './providers/triangle.service';
import { Employee } from './providers/employee.service';
import { ChildGuard } from './guards/child.guard';
import { InfoComponent } from './info/info.component';
import { Deactivate } from './guards/deactivate.guard';
import {HttpClientModule} from '@angular/common/http';
import { MyInterceptor } from './interceptors/my.interceptor';
import { CitiesComponent } from './cities/cities.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    TestComponent,
    EduComponent,
    HealthComponent,
    TriangleComponent,
    ProductsComponent,
    DoctorsComponent,
    Test2Component,
    InfoComponent,
    CitiesComponent

  ],
  imports: [
    HttpModule,
    NgxDatatableModule,
    HttpClientModule,
    Ng2TableModule,
    BrowserModule,
    FormsModule,
    AccordionModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '',component : HomeComponent},
      {path : 'users',component : UsersComponent,
      canActivateChild :[ChildGuard],
      canDeactivate : [Deactivate],
    children : [
      {path : 'info',component : InfoComponent},
      {path :'education',component : EduComponent}
    ]
    }
    
  
    ])
  ],
  providers: [
    CalculatorService,
    {
      provide : HTTP_INTERCEPTORS,useClass : MyInterceptor,multi :true
    },
    Deactivate,
    ChildGuard,
    Employee,
    Perimeter,
    TriangleService,
    UserService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
