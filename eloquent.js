//Minimum
function min(a,b){
  if (a<b){
    return a;
  }
  else {
    return b;
  }
}


//Recursion
function isEven(num){
  if (num%2===0){
    return true;
  }
  else{
    return false;
  }
}

//Bean Counting
function countChar(str, ch){
  var charCount = 0;
  for (var i=0;i<str.length;i++)
    if (str.charAt(i) === ch)
      charCount +=1;
    return charCount
}

function countBs(str){
  return countChar(str, "B");
}
