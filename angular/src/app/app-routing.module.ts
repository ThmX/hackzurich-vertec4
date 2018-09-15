import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProfileComponent} from "./profile/profile.component";
import {MyTasksComponent} from "./my-tasks/my-tasks.component";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {AnalyticsDashboardComponent} from "./analytics-dashboard/analytics-dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'myTasks',
    component: MyTasksComponent
  },
  {
    path: 'createProject',
    component: CreateProjectComponent
  },
  {
    path: 'statistics',
    component: AnalyticsDashboardComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
