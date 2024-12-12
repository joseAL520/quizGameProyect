import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../interfaces/quiz.interfecas';

@Injectable({
  providedIn: 'root'
})
export class QuizServicesService {
  private url:string = 'https://my-json-server.typicode.com/joseAL520/quizGame/preguntas';

  constructor(private http:HttpClient) { }

  getListQuestionaris():Observable<Quiz>{
    return this.http.get<Quiz>(this.url);
  }
}
