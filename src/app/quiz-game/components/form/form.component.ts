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
  public answers:string = '';
  public answersCorrect!:boolean

  public state:boolean = true;
  public point:number = 0;


  public category:Categoria[] = [
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Gamer' },
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
    const data = Object.entries(this.quizList);
    for (let index = 0; index <= currentIndex; index++) {
      this.quizTupla = data[this.currenCuestionIndex];
      return this.quizTupla
    }
    return
  }

  takeQuestion(){
    this.runningListQuestion()
    this.state=false
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
    this.takeAnswers()
    return 
  }

  //tomar la respuesta correcta
  takeAnswers(){
    const answers = (this.quizTupla[1] as {respuesta_correcta:string} ).respuesta_correcta
    this.answers = answers;
    return    
  }


  isValidationQuestion(option:string){
    this.answersCorrect =  (option === this.answers);
    return this.answersCorrect
  }

  isValidationCorrect(){
    const currentIndex = Object.entries(this.quizList).length
    this.currenCuestionIndex = this.currenCuestionIndex  + 1;

    if(currentIndex > this.currenCuestionIndex){
      console.log('entra',this.currenCuestionIndex)
      this.question= '';
      this.options  = []=[]
      this.answers = '';
      this.answersCorrect = false
      this.point = this.point + 1
      this.runningListQuestion()
      this.takeQuestion()  

    }else{
      this.point = this.point + 1
      this.state = true;
    }

  }

  isValidationInCorrect(){
      alert('perdistes')
      this.currenCuestionIndex = 0;
      this.question= '';
      this.options  = []=[]
      this.answers = '';
      this.answersCorrect = false
      this.point = 0;
      this.runningListQuestion()
      this.state = true;  
  }

  onSubmet() {

    if(!this.answersCorrect){  
      this.isValidationInCorrect() 
      return   
    }
    
    this.isValidationCorrect()
  }

  ngOnInit(): void {
    this.getListquestion();
  }



}
