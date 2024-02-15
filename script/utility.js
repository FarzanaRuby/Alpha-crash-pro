function hiddenSectionByid(eventid){
    const event =document.getElementById(eventid);
    event.classList.add('hidden');
  
}

function showElementById(eventid){
    const event =document.getElementById(eventid);
    event.classList.remove('hidden');
    console.log(eventid)
}

function addBackgroundColor(elementId){
   let color = document.getElementById(elementId);
   color.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
    let color = document.getElementById(elementId);
    color.classList.remove('bg-orange-400');
 }
  
 
function getRendomAlphabet(){
    const alphabetString= 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index from 0 to 25

  const randomNumber =Math.random()*25; // 0-25 porjonto random number newar jonno
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;

  
 }
               // get score part
 function currrentScoreElementText(eventid){
    const element = document.getElementById(eventid);
    const textElement = element.innerText;
    const numberElement = parseInt(textElement);
    // const updateNumber = numberElement+1;
    // const updateScore =updateNumber.innerText;
  return numberElement;
 }

 function setText (elementId,value){
    const element = document.getElementById(elementId,value);
    element.innerText=value;
 }

   
 

