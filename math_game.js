function upload(){

    Player1_name=localStorage.getItem("number1");
    Player2_name=localStorage.getItem("number2");

    update_player1_score=0;
    update_player2_score=0;

    document.getElementById("Player1_name").innerHTML=Player1_name+"=";
    document.getElementById("Player2_name").innerHTML=Player2_name+"=";

    document.getElementById("player1_score").innerHTML=update_player1_score;
    document.getElementById("player2_score").innerHTML=update_player2_score;

    document.getElementById("player_question").innerHTML="Question turn-"+Player1_name;
    document.getElementById("player_answer").innerHTML="Answer turn-"+Player2_name;
}



function Send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    question_number="<h4>"+number1+" X "+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>"
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check<//button>";
    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";


}
question_turn="player1";
answer_turn="player2";



function check(){
    get_answer=document.getElementById("input_check_box").value;

    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            update_player1_score=update_player1_score+1;
          document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        
        else{
            update_player2_score=update_player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }


        
    }
    
    if(question_turn=="player1")
    {
        question_turn="player2";
       
     
        document.getElementById("player_question").innerHTML="Question Turn-"+Player2_name;
       }
    else{
        question_turn="player1";
      
      
        document.getElementById("player_question").innerHTML="Question Turn-"+Player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+Player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+Player1_name;
    }

   
    document.getElementById("output").innerHTML="";
}