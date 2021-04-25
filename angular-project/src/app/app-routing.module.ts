import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLevelsComponent } from './admin-levels/admin-levels.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { DisplaySearchedUserComponent } from './display-searched-user/display-searched-user.component';
import { HomeComponent } from './home/home.component';
import { LevelsComponent } from './levels/levels.component';
import { LoginComponent } from './login/login.component';
import { RemoveLevelsComponent } from './remove-levels/remove-levels.component';
import { RemoveQuestionDisplayComponent } from './remove-question-display/remove-question-display.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { ResultComponent } from './result/result.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { TestHistoryPageComponent } from './test-history-page/test-history-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ViewQuestionComponent } from './view-question/view-question.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'add-question',component:AddQuestionComponent},
  {path:'remove-question',component:RemoveQuestionComponent},
  {path:'search-user',component:SearchUserComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'view-question',component:ViewQuestionComponent},
  {path:'admin-levels',component:AdminLevelsComponent},
  {path:'display-question',component:DisplayQuestionComponent},
  {path:'remove-levels',component:RemoveLevelsComponent},
  {path:'remove-question-display',component:RemoveQuestionDisplayComponent},
  {path:'levels',component:LevelsComponent},
  {path:'start-exam',component:StartExamComponent},
  {path:'result',component:ResultComponent},
  {path:'test-history-page',component:TestHistoryPageComponent},
  {path:'search-user',component:SearchUserComponent},
  {path:'display-searched-user',component:DisplaySearchedUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
