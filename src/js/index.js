console.log("If you see this you're good to go");

//console.log(domselectors.displaycontainer);
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
    nextquestion(); //Sets up listener for submit button
}

const enterquestions = function(e){

} //Will change question(s) to the actual question

const nextquestion = function(){
    const submit = document.querySelector('.submit');
    const clicksubmit = submit.addEventListener('click', thing=>{
        console.log("Next. Question.");
    }) //Listens for clicking submit button
}

// const scorekeeper = function(score){

// }



//const start = document.querySelector('#button start');
// start.addEventListener('click', function(e){
//     console.log("Let's get started!");
// });

 //const list = document.querySelector('#book-list ul .name');
//  list.addEventListener('click', function(e){
//     console.log("is this thing on?"); });  
//console.log(list);