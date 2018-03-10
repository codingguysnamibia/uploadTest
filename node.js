const html = "<div><span>Monday </span><span class='temp'>20</span></div>"

//const position = html.indexOf("<span>")+6
//const position2 = html.indexOf("</span>")
//const position3 = html.indexOf("<span class='temp'>")+19
//const position4 = html.indexOf("</span></")

//console.log (position)
//console.log (html[5])
//var day = ""
//for (i = position; i<position2 ; i++){
 //  day = day + html[i]
//}
//console.log (day)
//var temp = ""
//console.log (position4)

//for (i = position3; i<position4 ; i++){
  //temp = temp + html[i]
   //console.log (html[i])
//}
//console.log (temp)

//console.log (day + temp)

function loopie (str1,str2){
  const pos1 = html.indexOf(str1)+str1.length 
  const pos2 = html.indexOf(str2)
  
  thing = ""
  for (i = pos1; i<pos2; i++){
    thing = thing + html[i] 
  }
  return thing
}

var day = loopie ("<span>","</span>")
var temp = loopie ("<span class='temp'>", "</span></")
console.log (day + temp)