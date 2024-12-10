import { Component, OnInit } from '@angular/core';
import { QuizServicesService } from '../../services/quiz-services.service';
import { Categoria, Quiz } from '../../interfaces/quiz.interfecas';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent implements OnInit {
 
  public quizList!:Quiz;
  public currenCuestionIndex:number = 0;
  public quizTupla!: [id: string, value: {}]; 
  
  public question:string = '';


  public options:any[]=[]

  public category:Categoria[] = [
    { id: 1, nombre: 'Electrónica' },
  ]

   
  constructor(
    private srvQuiz: QuizServicesService
  ){}


 
  getListquestion(){
    this.srvQuiz.getListQuestionaris().subscribe(value => {
      this.quizList = value
     })
  }
    
  runningListQuestion(){
    
    const currentIndex = Object.entries(this.quizList).length
    const data = Object.entries(this.quizList)
   
    for (let index = 0; index <= currentIndex; index++) {
      this.quizTupla = data[this.currenCuestionIndex];
      return this.quizTupla
    }
    return
  }

  takeQuestion(){
    this.runningListQuestion()

    const question = (this.quizTupla[1] as {pregunta:string} ).pregunta
    this.question = question;
  
    this.takeOptions();
    return    
      
  }

  takeOptions(){
    this.runningListQuestion()
    const options = (this.quizTupla[1] as {opciones:{}} ).opciones
    const arrayOptions =  Object.entries(options)
    for (let index = 0; index <= arrayOptions.length; index++) {
      if(arrayOptions[index]){
        this.options.push(arrayOptions[index]) ;
      }
    }
    console.log(this.options)
    return 
  }

  //tomar la respuesta correcta

  isValidationQuestion(option:string){
    console.log(option)
  }

  ngOnInit(): void {
    
    this.getListquestion();
  }



}
