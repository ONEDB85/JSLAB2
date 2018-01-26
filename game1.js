var user;

function startGame() {

	var play = prompt("Do you want to play?", "yes or no");

	if(play === "yes"){
		user = prompt("What will be your name?");
		startCombat();
	}

	
}




function startCombat() {

    var userHealth = 40;
	var grantHealth = 10;
	var i = 0
	
	while (userHealth > 0 && grantHealth > 0) {
	    userHealth -= getDamage();
	    console.log (user + " has " + userHealth + " left.");
	   
	   
	  	grantHealth -= getDamage();
	    console.log ("Grant the Mighty Chicken has " + grantHealth + " left.");  
	    
	    
	    if (userHealth <= 0){
	      
	     	console.log(user + " wins")
	     	break;
	    }
	    
	    
	    if (grantHealth <= 0){
	    	grantHealth += 10
	    	i++
	        console.log("You have beat Grant you need to win " + (3 - i) + " rounds");
	     	
	     	var userContinue = prompt("Would you like to attack or quit", "attack or quit");
	     		if(userContinue === "quit"){

	     			break;
	     		}
	    }
	    
	    if (i >= 3){
	      
	     	console.log("Grant the Mighty Chicken Wins")
	     	break;
	    }
	    
	  } 
}

function getDamage() {

return Math.floor(Math.random() * 5) + 1 ;

}


startGame();



