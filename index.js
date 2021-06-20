var randomvalue=Math.floor(Math.random()*6)+1;
 var randomImage="images/dice"+randomvalue+".png";
 var img1=document.querySelectorAll("img")[0];
 img1.setAttribute("src", randomImage);


 var randomvalue1=Math.floor(Math.random()*6)+1;
 var randomImage1="images/dice"+randomvalue1+".png";
 var img2=document.querySelectorAll("img")[1];
 img2.setAttribute("src", randomImage1);


 if(randomvalue>randomvalue1)
 document.querySelector("h1").innerHTML="Player1 Won";
 else if(randomvalue<randomvalue1)
 document.querySelector("h1").innerHTML="Player2 Won";
 else
 document.querySelector("h1").innerHTML="Draw";