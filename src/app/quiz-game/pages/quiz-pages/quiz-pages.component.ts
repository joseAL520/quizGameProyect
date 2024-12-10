import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-quiz-pages',
  templateUrl: './quiz-pages.component.html',
  styleUrl: './quiz-pages.component.css'
})
export class QuizPagesComponent {

  public namePlayer:string = '';
  public gameStar:Boolean = false;


  starGame(name:string) {
      

     if(!name){
        return console.log('campo no valido');
     }

     return this.gameStar = true, this.namePlayer=name

  }

  

}
