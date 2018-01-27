var user;

function startGame() {

	var play = prompt("Do you want to play?", "yes or no");

	if(play === "yes"){
		user = prompt("What will be your name?");
		startCombat();
	}

	
}




function startCombat() {
	var computer = "Grant the Almighty Chicken"
    var userHealth = 40;
	var grantHealth = 10;
	var grantLives = 0
	
	while (userHealth > 0 && grantHealth > 0) {
	    userHealth -= getDamage();
	    console.log (user + " has " + userHealth + " left.");
	   
	   
	  	grantHealth -= getDamage();
	    console.log ("Grant the Mighty Chicken has " + grantHealth + " left.");  
	    
	    
	    if (userHealth <= 0){
	      
	     	console.log(computer + "wins")
	     	break;
	    }
	    
	    
	    if (grantHealth <= 0){
	    	grantHealth += 10
	    	grantLives++
	        
		    if (grantLives >= 3){
		      
		     	console.log( user + " Wins");
		     	break;
		    	}

	        console.log("You have beat " + computer +" you need to win " + (3 - grantLives) + " round(s)");
	     	var userContinue = prompt("Would you like to attack or quit", "attack or quit");
	     	
	     	if(userContinue === "quit"){

	     			break;
	     		}
	    }
	    
	    
	    
	} 
}

function getDamage() {

return Math.floor(Math.random() * 5) + 1 ;

}


startGame();



