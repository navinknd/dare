import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { ScoreComponent } from './Components/score/score.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'questions', component: QuestionsComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'score', component: ScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
