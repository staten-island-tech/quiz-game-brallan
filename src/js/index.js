console.log("If you see this you're good to go");


const getquiz = document.querySelector("#quiz-content");
const intropage = document.querySelector('.intro-page');
const startbtn = document.querySelector(".start");



const listener = startbtn.addEventListener("click", function(e){
     console.log("YES FINALLY")
     startquiz()
});

const startquiz = function(){
    intropage.classList.add('hidden'); //This hides the intro page 
    getquiz.classList.remove('hidden'); //This makes the hidden question appear
    enterquestions();
    nextquestion(); //Sets up listener for submit button
}

const enterquestions = function(){
    const qgrab = document.querySelector('#question')
    
    
        
    
    qgrab.innerHTML = `<div> ${database[0]} </div>`
} //Will change question(s) to the actual question

const nextquestion = function(){
    const submit = document.querySelector('.submit');
    const clicksubmit = submit.addEventListener('click', thing=>{
        
        console.log("Next. Question.");
    }) //Listens for clicking submit button
    
}

const database = [
    "0 What color is my underwear?", "1 this is bchappy", "2 bye"
]
console.log(database[2]);

const answers = [
    "White", "Green", "Red",
]

/*const checkanswer = function(){
    correct = answers[0];
    
    const selectans = document.querySelectorAll('#choices');
 selectans.forEach(function(btn){
     btn.addEventListener('click',function(e){
         console.log("you did it");
 },);

 }
 ,)};    */
// const scorekeeper = function(score){

// }



//const start = document.querySelector('#button start');
// start.addEventListener('click', function(e){
//     console.log("Let's get started!");
// });
