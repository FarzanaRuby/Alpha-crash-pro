function hiddenSectionByid(eventid){
    const event =document.getElementById(eventid);
    event.classList.add('hidden');
  
}

function showElementById(eventid){
    const event =document.getElementById(eventid);
    event.classList.remove('hidden');
    console.log(eventid)
}

function setBackgroundColor(eelementId){
    const element = document.getAnimations(eelementId);
    element.classList.add('bg-orange-400');
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

 

