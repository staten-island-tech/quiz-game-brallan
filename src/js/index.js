console.log("If you see this you're good to go");

domselectors = {

    displaycontainer: document.querySelector(".book-list"),
}

console.log(domselectors.displaycontainer);

const listener = domselectors.displaycontainer.addEventListener("click", function(){});
// const start = document.querySelector('#button start');
// start.addEventListener('click', function(e){
//     console.log("Let's get started!");
// });

//  const list = document.querySelector('#book-list ul');
//  list.addEventListener('click', function(e){
//     console.log("is this thing on?"); });  