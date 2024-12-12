import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { QuizPagesComponent } from './pages/quiz-pages/quiz-pages.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
  
    FormComponent,
             QuizPagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    QuizPagesComponent
  ]
})
export class QuizGameModule { }
