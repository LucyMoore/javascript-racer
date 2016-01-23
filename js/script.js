var textValue1 = "";                              //initiate global values
var textValue2 = "";
var trackLength = 0;

$( document ).ready(function() {                   //when page is fully loaded script can start
  trackLength = prompt("set the track length", "");
  setTrack(trackLength);
 });             

function setTrack(length){
  for(i=0;i<trackLength;i++){
    $("#player1_strip").append("<td>");
    $("#player2_strip").append("<td>");
  }
};

$(document).keyup(function(){                     //add event listener
  var keyPressed = event.keyCode;                 //record what key was pressed
  movePlayer1(keyPressed);                        //pass to each player move function
  movePlayer2(keyPressed);
});

function winner(player){
    window.alert( player +  " WINS!!");
    location.reload();
  }

  function movePlayer1(keyPressed){                // this is how we move player 1 
    if(keyPressed === 81) {                        //check if the key pressed was 'q'
      var x = document.querySelector('.active');   //

        if (x) {                                   //if x is a Truthy 
          var nextX = x.nextElementSibling;        //get the next <td> in the table row 
          nextX.setAttribute('class', 'active');    //set the class on the next <td> to "active"
          x.setAttribute('class', '');              //remove the class from the current <td>
        }
      
        textValue1 = $(".active").text();            // extract the text value of the active class
        console.log(textValue1)
        if(textValue1 === "FINISH"){                // if it is the finish line 
          winner("Player 1");                                 //run the winner function
        }

    }            
  };

  function movePlayer2(keyPressed){         // this is how we move player 2 
    if(keyPressed === 80) {                 //check if the key pressed was 'p'
      var x = document.querySelector('.active2'); //

        if (x) {                                    //if x is a Truthy 
          var nextX = x.nextElementSibling;         //get the next <td> in the table row
          nextX.setAttribute('class', 'active2');    //set the class on the next <td> to "active"
          x.setAttribute('class', '');              //remove the class from the current <td>
        }

        textValue = $(".active2").text();                       // extract the text value of the active class
        
        if(textValue === "FINISH"){                             // if it is the finish line 
          winner("player 2");                                   //run the winner function
        }
    }  
  };

  
