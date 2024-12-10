import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { QuizPagesComponent } from './pages/quiz-pages/quiz-pages.component';


@NgModule({
  declarations: [
    
  
    FormComponent,
             QuizPagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    QuizPagesComponent
  ]
})
export class QuizGameModule { }
