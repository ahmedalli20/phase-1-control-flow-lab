
function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400){
     return 'This one is on me!' ;
  } else if(ride > 2000 && ride <= 2500){
    return 'I will gladly take your thirty bucks.';
  }else(ride > 2500) 
    return 'No can do.';
  
}
 
function ternaryCheckCity(city){
  // Write your code here!
  return city =='NYC'?  "Ok, sounds good." : "No go."
  
  // if(city=='NYC'){
  //   return "Ok, sounds good."
  // }else{
  //   return "No go."
  // }
   
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  var tip;
  switch(tip){
  case 'generous':
       return "Thank you so much.";
       break;
  case 'not as generous': 
        return "Thank you.";
        break;
  default:
    return "Bye.";
    break;
  }
}

    
