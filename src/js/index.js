console.log("If you see this you're good to go");


const getquiz = document.querySelector("#quiz-content");
const intropage = document.querySelector('.intro-page');
const startbtn = document.querySelector(".start");



const listener = startbtn.addEventListener("click", function(e){
     
     startquiz()
});

const startquiz = function(){
    intropage.classList.add('hidden'); //This hides the intro page 
    getquiz.classList.remove('hidden'); //This makes the hidden question appear
    enterquestions(0);
    nextquestion(); //Sets up listener for submit button
}

const enterquestions = function(x){
    const qgrab = document.querySelector('#question') 
    qgrab.innerHTML = `<div> ${database[x]} </div>`;
 //Replaces question html with questions from the database
    const agrab1 = document.querySelector('#one');
    agrab1.innerHTML = `${choice1[x]}`;
    const agrab2 = document.querySelector('#two');
    agrab2.innerHTML = `${choice2[x]}`;
    const agrab3 = document.querySelector('#three');
    agrab3.innerHTML = `${choice3[x]}`;
    const agrab4 = document.querySelector('#four');
    agrab4.innerHTML = `${choice4[x]}`;
} 

const nextquestion = function(){
    const submit = document.querySelector('.submit');
    let x = 0;
    const clicksubmit = submit.addEventListener('click', thing=>{
        // for(x = 0; x <5; x++){
        //    // console.log(`Question ${x}`);
        // }
        
        ++x;
        
        enterquestions(x);
        

        
       });   //Every time you click submit, x increases by 1, leading to new questions and choices being presented.
    
}

const database = [
    "What's my favorite shirt color?", "What's my github username?", "Bye", "That's the end!"
]//An array that holds all the questions


const choice1 = [
    "Blue", "BrandonC", "Goodbye!",
]
const choice2 = [
    "Grey", "brandon.chiapperino", "see ya",
]
const choice3 = [
    "Red", "B-Chappy", "whatever",
]
const choice4 = [
    "Black", "bboy4548", "That's it?",
]
