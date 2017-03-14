
//var 

var isPLayed = false ;
var isInterval
var context= document.getElementsByTagName('canvas')[0];
//click generate new draw
context.addEventListener("click", function(){
  drawTriangle()
    });

//play 

  document.getElementById("play").addEventListener("click", function(){
  	document.getElementById("player").play();
  	isPLayed = true;
  	 	if (isPLayed  == true) {
  		drawTriangle()
  		console.log("je dessine")
  	}
  	else
  	{
  		console.error("ca marche pas")
  	}


  });

//pause

    document.getElementById("pause").addEventListener("click", function(){
    	document.getElementById("player").pause();
    	isPLayed = false;
    	if (!isPLayed == true) {
  		var context= document.getElementsByTagName('canvas')[0].getContext("2d");
		  context.clearRect(0, 0, context.canvas.width, context.canvas.height);  
		  console.log('propre')
  	}

    });

    addEventListener("click", function(){
   

    });

//Get bpm track
/*  

  myaudio=document.getElementById("player");
  z = myaudio.playbackRate*200;

  console.log(z*14000)

  var myVar
  document.getElementById("start").addEventListener("click", startInterval());


*/

/*//Start chen play 
  function startInterval() {
  	if (isPLayed  == true) {
  		return isInterval = setInterval(drawTriangle(), 1000);
  	}
  	else
  	{
  		console.error("ca marche pas")
  	}
  	
  }

//stop when pause
  function myStopFunction() {
  	if (!isPLayed == true) {
  		clearInterval(isInterval);
  	}
  }*/

/*  startInterval()
  myStopFunction()*/