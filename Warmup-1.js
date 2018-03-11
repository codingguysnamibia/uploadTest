

//Warmup-1: sleepIn
function sleepIn( weekday, vacation) {
  if (!weekday && !vacation  )
  return true;
  else if (weekday && !vacation)
  return false;
  else if (!weekday && vacation )
  return true;
  else
  return 0;
}

//Warmup-1: monkeyTrouble
function monkeyTrouble( aSmile,  bSmile) {
  if(aSmile && bSmile)
  return true;
  else if(!aSmile && !bSmile)
  return true;
  else if(aSmile && !bSmile)
  return false;
  else
  return false; 
}

//Warmup-1: SumDouble
function sumDouble(a, b) {
  if (a != b)
  return a+b;
  else
  return 2*(a+b);
}

//Warmup-1: diff21
function  diff21( n) {
  if ( Math.abs(n-21 < 21) || Math.abs(n-21) == 21)
  return n-21;
  else
  return 2*(Math.abs(n-21));
}

//Warmup-1: parrotTrouble
function parrotTrouble( talking, hour) {
  if((talking && hour < 7) || (talking && hour > 20) )
  return true;
  else if(talking && hour > 7 && hour<20)
  return false; 
  else if(!talking)
  return false;
  else
  return false;
}

//Warm-1:makes10
 function makes10( a, b) {
  if(a == 10 || b == 10)
  return true;
  else if( (a+b) == 10)
  return true;
  else
  return false;
}

//Warm-1:nearHundred
function nearHundred( n) {
  if (Math.abs(100-n)<11)
  return true;
  else if(Math.abs(200-n)<11)
  return true;
  else 
  return false;
}

//Warm-1: posNeg
function posNeg( a,  b, negative) {
  if ((a*b)<=0 && !negative)
  return true;
  else if(a >=0 && b>=0 && negative)
  return false;
  else if((a*b)>0 && negative)
  return true;
  
  else
  return false;
}

//Warm-1:notString
function notString( str) {
  if(str.length()<=2)
  return "not " + str;
  else if((str.substring(0,3)).equals("not"))
  return str;
  else 
  return "not " + str;
}

//Warm-1: missingChar
function missingChar( str,  n) {
   strN = "";
  for ( i=0; i<str.length(); i++)
  {
    if(i != n)
    strN = strN + str.charAt(i);
    
  }
  return strN;
}