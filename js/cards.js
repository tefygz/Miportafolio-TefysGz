const iLeft = document.querySelector('#i-left');
const iRight = document.querySelector('#i-right');
let card1 = document.querySelector('.card-aboutme1');
let card2 = document.querySelector('.card-technologies');



 iLeft.addEventListener('click', ()=>{
    console.log('diste click')
    
    card1.style.visibility = "hidden";
    card2.style.visibility = "visible";
       
});


iRight.addEventListener('click', ()=>{
    console.log('diste click')
    card1.style.visibility = "visible";
    card2.style.visibility = "hidden";
    
});