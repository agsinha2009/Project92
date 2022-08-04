var Player1_name="";
var Player2_name="";



function addPlayers(){
    Player1_name=document.getElementById("name1").value;
    Player2_name=document.getElementById("name2").value;
  
    localStorage.setItem("number1",Player1_name);
    localStorage.setItem("number2",Player2_name);
  
    window.location="math_game.html";
  }