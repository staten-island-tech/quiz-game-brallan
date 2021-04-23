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
    anscheck(0);
    nextquestion(); //Sets up listener for submit button
}

const enterquestions = function(x){
    const qgrab = document.querySelector('#question') 
    qgrab.innerHTML = `<div> ${database[x].question} </div>`;
 //Replaces question html with questions from the database
    const agrab1 = document.querySelector('#one');
    agrab1.innerHTML = `${database[x].choice1}`;
    const agrab2 = document.querySelector('#two');
    agrab2.innerHTML = `${database[x].choice2}`;
    const agrab3 = document.querySelector('#three');
    agrab3.innerHTML = `${database[x].choice3}`;
    const agrab4 = document.querySelector('#four');
    agrab4.innerHTML = `${database[x].choice4}`;
    
    

    // const answercheck = function(){
    //     agrab1.addEventListener('click', function(){
    //         if(database[x].correct === "choice1"){green('#one')}
    //         else{red('#one')} 
    //     })
    //     agrab2.addEventListener('click', function(){
    //         if(database[x].correct === "choice2"){green('#two')}
    //         else{red('#two')} 
    //     })
    //     agrab3.addEventListener('click', function(){
    //         if(database[x].correct === "choice3"){green('#three')}
    //         else{red('#three')} 
    //     })
    //     agrab4.addEventListener('click', function(){
    //         if(database[x].correct === "choice4"){green('#four')}
    //         else{red('#four')} 
    //     })  
    // }
    // answercheck();
} 


const nextquestion = function(){
    const submit = document.querySelector('.submit');
    let x = 0;
    const results = function(){
        getquiz.classList.add('hidden');
        resultspage.classList.remove('hidden');
    }
    submit.addEventListener('click', thing=>{
        // for(x = 0; x <5; x++){
        //    // console.log(`Question ${x}`);
        // }
        
        
        ++x;
        if(x < 6){
            
            
            
            enterquestions(x);
            anscheck(x);
        }
        else{results();}
        
        //allchoices.classList.remove('.red');
        

        
    })//Every time you click submit, x increases by 1, leading to new questions and choices being presented.
    
};
const anscheck = function(x){
    const agrab1 = document.querySelector('#one');
    
    const agrab2 = document.querySelector('#two');
    
    const agrab3 = document.querySelector('#three');
    
    const agrab4 = document.querySelector('#four');
    
    
    
    const clear = function(){
        agrab1.classList.remove('green');
        agrab1.classList.remove('red');
        agrab2.classList.remove('green');
        agrab2.classList.remove('red');
        agrab3.classList.remove('green');
        agrab3.classList.remove('red');
        agrab4.classList.remove('green');
        agrab4.classList.remove('red');
    }
    clear();
    
    let points = 0;
    
    const green = function(a){
        const agraba = document.querySelector(`${a}`);
       // agraba.classList.remove('choices');
        agraba.classList.add('green');
        const score = document.querySelector('#scoretext');
        ++points;
        score.innerHTML = `Your score is ${points} / 5`;
        
    }
    const red = function(c){
        const agrabc = document.querySelector(`${c}`);
        //agrabc.classList.remove('choices');
        agrabc.classList.add('red');
        
    }
    
    agrab1.addEventListener('click', function(){
        if(database[x].correct === "choice1"){green('#one')}
        else{red('#one')} 
    })
    agrab2.addEventListener('click', function(){
        if(database[x].correct === "choice2"){green('#two')}
        else{red('#two')} 
    })
    agrab3.addEventListener('click', function(){
        if(database[x].correct === "choice3"){green('#three')}
        else{red('#three')} 
    })
    agrab4.addEventListener('click', function(){
        if(database[x].correct === "choice4"){green('#four')}
        else{red('#four')} 
    })

    
}


const database = [
    {
        question: "Which Mario Kart DS track has cars and trucks as obstacles?",
        choice1: "Delfino Square",
        choice2: "Waluigi Pinball",
        choice3: "Shroom Ridge",
        choice4: "DK Pass",
        correct: "choice3",
    },
    {
        question: "Which character did NOT appear in Mario Kart 64?",
        choice1: "Daisy",
        choice2: "Yoshi",
        choice3: "Wario",
        choice4: "Donkey Kong",
        correct: "choice1",
    },
    {
        question: "What new game mechanic was introduced in Mario Kart Wii?",
        choice1: "Double item boxes",
        choice2: "Anti-Gravity",
        choice3: "Gliding",
        choice4: "Tricking",
        correct: "choice4",
    },
    {
        question: "Which Mario Kart was the first to officially introduce 200cc as a speed option?",
        choice1: "Mario Kart Double Dash",
        choice2: "Mario Kart 8",
        choice3: "Mario Kart Wii",
        choice4: "Mario Kart 7",
        correct: "choice2",
    },
    {
        question: "What Mario Kart game first featured the characters Petey Piranha and King Boo?",
        choice1: "Mario Kart DS",
        choice2: "Mario Kart Wii",
        choice3: "Mario Kart Double Dash",
        choice4: "Mario Kart 8",
        correct: "choice3",
    },
    {
        question: "EXTRA CREDIT: Which GBA Bowser's Castle track  did NOT return in later games?",
        choice1: "Bowser's Castle 1",
        choice2: "Bowser's Castle 2",
        choice3: "Bowser's Castle 3",
        choice4: "Bowser's Castle 4",
        correct: "choice4",
    }
]//An array that holds all the questions

