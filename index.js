'use strict';
alert("Just a trial version as we're learning Javascript!😀");
var randomNumber1; //ο τυχαιος αριθμος
let selectedDice1, selectedDice2; //επιλεγμενα ζαρια!


selectedDice1=document.querySelector("img.img1"); //επιλεγμενο πρωτο ζαρι 
selectedDice2=document.querySelector("img.img2"); //επιλεγμενο δευτερο ζαρι 

function calculateDice(selectedDice){ //συναρτηση που βρισκει τυχαιο αριθμο &οριζει την αναλογη img
  var x,dice;
  x=Math.floor(Math.random()*6)+1; //τυχαιος στρογγυλοποιημενος αριθμος 0...5.99+1 =0...6.99
  dice="/images/dice"+x+".png";
  selectedDice.setAttribute("src",dice);

   return x; //epistrefei to zari
}

selectedDice1.addEventListener('click', function(){calculateDice(selectedDice1);
    if(calculateDice(selectedDice1)===calculateDice(selectedDice2)){
        document.querySelector("h1").innerHTML="The score is deuce";
    }else if(calculateDice(selectedDice1)>calculateDice(selectedDice2) ){
        document.querySelector("h1").innerHTML="Player 1 wins!🚩";
    
    }else{
        document.querySelector("h1").innerHTML="Player 2 wins!🚩";
    
    } } ,false);

selectedDice2.addEventListener('click',function(){calculateDice(selectedDice2); 
    if(calculateDice(selectedDice1)===calculateDice(selectedDice2)){
        document.querySelector("h1").innerHTML="The score is deuce";
    }else if(calculateDice(selectedDice1)>calculateDice(selectedDice2) ){
        document.querySelector("h1").innerHTML="Player 1 wins!🚩";
    
    }else{
        document.querySelector("h1").innerHTML="Player 2 wins!🚩";
    
    }},false);


