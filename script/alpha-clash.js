

// function play(){
//   const homeSection=document.getElementById("home-screen")
//   homeSection.classList.add('hidden');
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove('hidden');
   
// }
function buttonEventHandeler(event){
  const playerPressed = event.key;
  console.log(playerPressed);
//   stop the game if player pressed escape
if(playerPressed==='Escaped'){
   gameOver()
}


//   get the expected to press
 const currentAlphabetElement=document.getElementById("random-alphabet");
 const currentAlphabet =currentAlphabetElement.innerText;
 const expectedAlphabet = currentAlphabet.toLowerCase();
 console.log(playerPressed,expectedAlphabet);



   if(playerPressed==expectedAlphabet){
      console.log('You get a point')

    const currentValue= currrentScoreElementText('current-score');
     
      const updateNumber = currentValue+1;
      setText ('current-score',updateNumber);




       // update score
   // 1.get the current score
   // const currentScoreByElement = document.getElementById('current-score');
   // const currentScoreText = currentScoreByElement.innerText;
   // const currentScore = parseInt(currentScoreText)
   // // console.log(currentScore)
   // // 2.incress the score by 1
   // const newScore = currentScore+1;
   // currentScoreByElement.innerText=newScore;
   }

  
   else{
      console.log('You missed .You lost a  life');

      const currentLife= currrentScoreElementText('current-life');
      console.log(currentLife);
      const updatetedLlife= currentLife-1;
      setText('current-life',updatetedLlife);

      if(updatetedLlife==0){
         gameOver()
      }

   //  const currentLife=  currrentScoreElementText("current-life");
     
   //  const updateLifeNumber = currentLife-1;
   //  setText ("current-life",updateLifeNumber);




      // currentLifeElementText("current-life");
      // get the current life 
      // const currentLifeById= document.getElementById("current-life");
      // const currentLifeScore = currentLifeById.innerText;
      // const currentLifeNumber = parseInt(currentLifeScore);
      // console.log(currentLifeNumber);
      // const lifeLong= currentLifeNumber-1;
      // currentLifeById.innerText=lifeLong;


   }
   removeBackgroundColor(expectedAlphabet)
   continueGame()
}

document.addEventListener('keyup',buttonEventHandeler)


function continueGame()
{
   const alphabet=getRendomAlphabet();
   console.log('Your random alphabet',alphabet);


   // set random alphabet to the screen 
   const randomAlphabet = document.getElementById("random-alphabet");
   randomAlphabet.innerText= alphabet;
   // setbackground color
   addBackgroundColor(alphabet);
  

}
function play(){
   hiddenSectionByid("home-screen");
   showElementById("play-ground");
   hiddenSectionByid("final-score");


   setText('current-life',5);
   setText('current-scor',0);
   continueGame();
   
}
function gameOver(){
   hiddenSectionByid("play-ground")
   showElementById("final-score");
   // get final score
   const lastScore = currrentScoreElementText('current-score');
   console.log(lastScore);
   setText('last-score',lastScore);
}
