var trackLength = 0;                                  //initialize global variables
var movesP1 = 0;
var movesP2 = 0;


$( document ).ready(function() {                      //when page is fully loaded script can start
  trackLength = prompt("set the track length", "");   //prompt the user to set a track length
  setTrack(trackLength);                              //call the function that sets the track
 });             

function setTrack(length){                            //this is how we set the track lenth
  for(i=0;i<trackLength;i++){                         //add another cell to the table untill the limit is reached
    $("#player1_strip").append("<td>");               
    $("#player2_strip").append("<td>");
  }
};

$(document).keyup(function(){                         //add event listener
  var keyPressed = event.keyCode;                     //record what key was pressed
  movePlayer1(keyPressed);                            //pass to each player move function
  movePlayer2(keyPressed);
});


  function movePlayer1(keyPressed){                   // this is how we move player 1 
    if(keyPressed === 81) {                           //check if the key pressed was 'q'
      if(movesP1< trackLength){                       //check current moves are less than the track length
      var x = document.querySelector('.active');      //
        if (x) {                                      //if x is a Truthy 
          var nextX = x.nextElementSibling;           //get the next <td> in the table row 
          nextX.setAttribute('class', 'active');      //set the class on the next <td> to "active"
          x.setAttribute('class', '');                //remove the class from the current <td>
          movesP1++;                                  //increase moves by 1
        }
      }
      else{
        winner("player1");                            //if number of moves is more than the track length print winner
      }
    }            
  };


function movePlayer2(keyPressed){                     // this is how we move player 1 
    if(keyPressed === 80) {                           //check if the key pressed was 'q'
      if(movesP2 < trackLength){                      //check current moves are less than the track length
      var x = document.querySelector('.active2');     //get active class assign location to x 
        if (x) {                                      //if x is a Truthy 
          var nextX = x.nextElementSibling;           //get the next <td> in the table row 
          nextX.setAttribute('class', 'active2');     //set the class on the next <td> to "active"
          x.setAttribute('class', '');                //remove the class from the current <td>
        movesP2++;                                    //increase moves by 1
        }
      }
      else{
        winner("player 2");                           //if number of moves is more than the track length print winner
      }
    }            
  };
  

 function winner(player){                             //when someone wins display window
    window.alert( player +  " WINS!!");               // window pops up and anounces winner
    location.reload();                                //when the user clicks ok the page reloads
  }
 
}