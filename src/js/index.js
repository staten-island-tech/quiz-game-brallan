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
    enterquestions(0);
    nextquestion(); //Sets up listener for submit button
}

const enterquestions = function(x){
    const qgrab = document.querySelector('#question')
    
    
        
    
    qgrab.innerHTML = `<div> ${database[x]} </div>`
} //Will change question(s) to the actual question

const nextquestion = function(){
    const submit = document.querySelector('.submit');
    let x = 0;
    const clicksubmit = submit.addEventListener('click', thing=>{
        // for(x = 0; x <5; x++){
        //    // console.log(`Question ${x}`);
        // }
        
        ++x;
        console.log(x);
        enterquestions(x);
        

        
       });   //Listens for clicking submit button
    
}

const database = [
    "0 What color is my underwear?", "1 this is bchappy", "2 bye", "3 yes!"
]


const answers = [
    "White", "Green", "Red",
]


// const scorekeeper = function(score){

// }



//const start = document.querySelector('#button start');
// start.addEventListener('click', function(e){
//     console.log("Let's get started!");
//
