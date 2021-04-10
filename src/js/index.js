console.log("If you see this you're good to go");

domselectors = {

    displaycontainer: document.querySelector(".start"),
}

console.log(domselectors.displaycontainer);

const listener = domselectors.displaycontainer.addEventListener("click", function(e){
     console.log("YES FINALLY")
});

// const scorekeeper = function(score){

// }



// const start = document.querySelector('#button start');
// start.addEventListener('click', function(e){
//     console.log("Let's get started!");
// });

 //const list = document.querySelector('#book-list ul .name');
//  list.addEventListener('click', function(e){
//     console.log("is this thing on?"); });  
//console.log(list);