 const questions=[
    {
        question: "In what year did the Great October Socialist Revolution take place?",
        answers : [
            {text:"1917",correct:true},
            {text:"1923",correct:false},
            {text:"1914",correct:false},
            {text:"1920",correct:false},
        ]
    },
    {
        question: " What is the largest lake in the world?",
        answers : [
            {text:"Caspian Sea",correct:false},
            {text:"Baikal",correct:true},
            {text:"Lake Superior",correct:false},
            {text:"Ontario",correct:false},
        ]
    },
    {
        question: " Which planet in the solar system is known as the “Red Planet”?",
        answers : [
            {text:"Venus",correct:false},
            {text:"Earth",correct:false},
            {text:"Mars",correct:true},
            {text:"Juptier",correct:false},
        ]
    },
    {
        question: " Who wrote the novel “War and Peace”?",
        answers : [
            {text:"Anton Chekhov",correct:false},
            {text:"Fyodor Dostoevsky",correct:false},
            {text:"Leo Tolstoy",correct:true},
            {text:"Ivan Turgenev",correct:false},
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers : [
            {text:"Beijing",correct:false},
            {text:"Tokyo",correct:true},
            {text:"Seoul",correct:false},
            {text:"Bangkok",correct:false},
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers : [
            {text:"Amazon",correct:false},
            {text:"Mississippi",correct:false},
            {text:"Nile",correct:true},
            {text:"Yangtze",correct:false},
        ]
    },
    {
        question: " What chemical element is designated as “Hg”?",
        answers : [
            {text:"Silver",correct:false},
            {text:"Tin",correct:false},
            {text:"Copper",correct:false},
            {text:"Mercury",correct:true},
        ]
    },
    {
        question: "What is the primary ingredient in traditional French béchamel sauce?",
        answers : [
            {text:"Chicken broth",correct:false},
            {text:" Fish stock",correct:false},
            {text:"Milk",correct:true},
            {text:" Tomato",correct:false},
        ]
    },
    {
        question: " How many bones are there in the adult human body?",
        answers : [
            {text:"186",correct:false},
            {text:"226",correct:false},
            {text:"246",correct:false},
            {text:"206",correct:true},
        ]
    },
    {
        question: " What is the gestation period of a rabbit?",
        answers : [
            {text:"40-45 days",correct:false},
            {text:"50-55 days",correct:false},
            {text:"60-65 days",correct:false},
            {text:"28-31 days",correct:true},
        ]
    },
    {
        question: "Which spice is known as 'queen of spices'?",
        answers : [
            {text:"Cinnamon",correct:false},
            {text:"Cardamom",correct:true},
            {text:"Nutmeg",correct:false},
            {text:"Black pepper",correct:false},
        ]
    },
    {
        question: "What is a 'raid' on Twitch?",
        answers : [
            {text:" A content type",correct:false},
            {text:"A channel takeover",correct:false},
            {text:"Practice group gaming",correct:false},
            {text:"Sending viewers to another channel",correct:true},
        ]
    },
    {
        question: "Which breed of dog is known for its excellent sense of smell and tracking abilities?",
        answers : [
            {text:"Golden Retriever",correct:false},
            {text:"German Shepherd",correct:false},
            {text:"Bloodhound",correct:true},
            {text:"Bulldog",correct:false},
        ]
    },
]
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You are ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();