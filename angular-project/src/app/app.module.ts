import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { ExamComponent } from './exam/exam.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { AdminLevelsComponent } from './admin-levels/admin-levels.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { RemoveLevelsComponent } from './remove-levels/remove-levels.component';
import { RemoveQuestionDisplayComponent } from './remove-question-display/remove-question-display.component';
import { LevelsComponent } from './levels/levels.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { ResultComponent } from './result/result.component';
import { TestHistoryPageComponent } from './test-history-page/test-history-page.component';
import { DisplaySearchedUserComponent } from './display-searched-user/display-searched-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ResetPasswordComponent,
    ReportCardComponent,
    ExamComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AddQuestionComponent,
    RemoveQuestionComponent,
    SearchUserComponent,
    NavbarComponent,
    UserRegistrationComponent,
    RegistrationConfirmationComponent,
    ConfirmEqualValidatorDirective,
    ViewQuestionComponent,
    AdminLevelsComponent,
    DisplayQuestionComponent,
    RemoveQuestionDisplayComponent,
    RemoveLevelsComponent,
    LevelsComponent,
    StartExamComponent,
    ResultComponent,
    TestHistoryPageComponent,
    DisplaySearchedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
