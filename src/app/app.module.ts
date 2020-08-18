import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { EditComponent } from './edit/edit.component';
import { EmployeComponent } from './employe/employe.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EmployeService } from './services/employe.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTooltipModule} from '@angular/material/tooltip';
import { QuillModule } from 'ngx-quill';
import { StudentComponent } from './student/student.component'
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WeatherComponent } from './weather/weather.component';
import { MypipePipe } from './mypipe.pipe';
import { CookieService } from 'ngx-cookie-service';
import { StudentsComponent } from './students/students.component';
import { GroupByPipe } from './group-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    EditComponent,
    EmployeComponent,
    StudentComponent,
    WeatherComponent,
    MypipePipe,
    StudentsComponent,
    GroupByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SimplebarAngularModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatTooltipModule,
    Ng2SmartTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    QuillModule
  ],
  providers: [
    MatNativeDateModule,
    EmployeService,
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
