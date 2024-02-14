

// function play(){
//   const homeSection=document.getElementById("home-screen")
//   homeSection.classList.add('hidden');
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove('hidden');
   
// }

function continueGame()
{
   const alphabet=getRendomAlphabet();
   console.log('Your random alphabet',alphabet);


   // set random alphabet to the screen 
   const randomAlphabet = document.getElementById("random-alphabet");
   randomAlphabet.innerText= alphabet;
   // setbackground color
   setBackgroundColor(alphabet);

}
function play(){
   hiddenSectionByid("home-screen");
   showElementById("play-ground");
   continueGame();
   
}
