import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { EditComponent } from './edit/edit.component';
import { EmployeComponent } from './employe/employe.component';
import { WeatherComponent } from './weather/weather.component';
import { StudentsComponent } from './students/students.component';
const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  {path: 'employe', component: EmployeComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'students', component: StudentsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
