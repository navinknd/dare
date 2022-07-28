import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { DareListService } from './services/dare-list.service';
import { QuestionsComponent } from './Components/questions/questions.component';
import { ScoreComponent } from './Components/score/score.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    ScoreComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [DareListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
