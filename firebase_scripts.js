//Initializing the default firebase app has already been done in index.html and does not need to be repeated here.

var defaultApp = firebase.app();

console.log("Default app name: " + defaultApp.name);  // Will print "[DEFAULT]"

var defaultDatabase = defaultApp.database();

// Get a reference to the root of the Database. All references start at the root.
var rootRef = defaultDatabase.ref();

var date = new Date();

$(document).ready(function() {
					loadWelcomeMessage();
					loadContent(); 
          console.log("Done loading")
});

/*function readOnce(reference) {
	var doesThisExist = "test exist";
	firebase.database().ref(reference).once('value').then(function(snapshot) {
		var val = snapshot.val();
		console.log("Value at " + reference + ": " + val);
		console.log(doesThisExist);
		doesThisExist = "test firebase";
		console.log(doesThisExist);
	});
	console.log(doesThisExist);
	return doesThisExist;
}*/ //This sort of thing won't work as expected because the value of doesThisExist doesn't change until later on, after readOnce has already finished, since firebase needs time to load the data. it does not pause to wait for firebase when written like this. 

function loadWelcomeMessage() {
	rootRef.child("welcome-msg/").once('value').then(function(snapshot) {
		$("#welcome-msg").html(snapshot.val());
	});
	console.log("Loaded welcome message.");
}

function sendMessage() {
	var name = $("#namebox").val();
	var msg = $("#msgbox").val();
	
	console.log("Sending message from '" + name + "' with contents '" + msg + "'");
	
	rootRef.child("messages").child(name + "_" + date.getTime()).set({
		username: name,
		message: msg
	});
	
	/*if(message !== '') {
		
		
	}
	else
	{
		console.log("Not sending message, no text to send.")
	}*/
}



function loadContent() {
	
	
	
  /*rootRef.child("leaderboarddata").on('value', function(snapshot) { //put listener on main div that rebuilds the table every time
    document.getElementById("theScoreboard").innerHTML = ""; //wipe all previously created elements
    var counter = 1;
    snapshot.forEach(function(childSnapshot) {
      console.log(childSnapshot);
      console.log("Running in the for each loop " + counter);
      var tempVar = document.createElement('h2');
      console.log(tempVar);
      tempVar.innerHTML = "Place " + counter + ": " + childSnapshot.val();
      console.log(childSnapshot.val());
      console.log(tempVar);
      document.getElementById("theScoreboard").appendChild(tempVar);
      counter++;
    });
  });*/
}