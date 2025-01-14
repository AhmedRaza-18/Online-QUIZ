const questions = [
    {
      question: 'What is the capital of France? ',
      answers: [
        { text:"Paris", correct: true},
        
        { text:"Rome", correct: false},
        
        { text:"London", correct: false},
        
        { text:"Karachi", correct: false},
 
        ]
    },
    {
      question: 'What is the largest planet in our solar system? ',
      answers :[
      {text:"mars", correct:false},
        
        {text:"Jupiter", correct:true},
        
        {text:"Sun", correct:false},
        
        {text:"Earth", correct:false},
      ]
    },
    {
      question: 'What is the smallest country in the world? ',
      answers :[
        {text:"Pakistan", correct:false},
          
          {text:"Germany", correct:false},
          
          {text:"USA", correct:false},
          
          {text:"Vatican City", correct:true},
        ]
    },
    {
      question: 'What is the largest mammal? ' ,
      answers :[
        {text:"Shark", correct:false},
          
          {text:"Golden Fish", correct:false},
          
          {text:"Octupus", correct:false},
          
          {text:"Blue Whale", correct:true},
        ]
    }
  
    ];
    const questionElement=document.getElementById("question");
    const answerButtons=document.getElementById("answer-buttons");
    const nextButton=document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score=0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score=0;
        nextButton.innerHtml = "Next";
        showQuestion();
    }
    function showQuestion(){
     resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;
     

    currentQuestion.answers.forEach(answer => {
    const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct ==="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++
}else{
    selectedBtn.classList.add("incorrect")
}
Array.from(answerButtons.children). forEach(button => {

    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled =true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Next";
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click" ,()=>{
if(currentQuestionIndex < questions.length){
handleNextButton();
}else{
    startQuiz();
}
});
startQuiz();




