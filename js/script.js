


let answer = document.getElementById('answer')

function show(){
  let answer = document.getElementById('answer')
    let day = document.getElementById('day').value;
switch(day){
  case"Sunday":
answer.innerText = `let's go and eat pizza`;
event.preventDefault();

  break;
  case"Monday":
  answer.innerText = `let's watch fantsy show`;
  event.preventDefault();


  break;
  case"Tuesday":
  answer.innerText = `finish assignments`;
  event.preventDefault();


  break;
  case"Wensday":
  answer.innerText = `let's go to gym`;
  event.preventDefault();


  break;
  case"Thursday":
  answer.innerText = `the weekend begins let's go outside`;
  event.preventDefault();

  break;
  case"Friday":
  answer.innerText = `It's Friday, have a blessed day!`;
  event.preventDefault();

  break;
  case"Saturday":
  answer.innerText = `Weekend vibes! Start your week fresh`;
  event.preventDefault();

  break;
  default:
    answer.innerText="enter correct day name..."

 
    event.preventDefault();
}
}
