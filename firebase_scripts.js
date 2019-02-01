//Initializing the default firebase app has already been done in index.html and does not need to be repeated here.

var defaultApp = firebase.app();

console.log("Default app name: " + defaultApp.name);  // Will print "[DEFAULT]"

var defaultDatabase = defaultApp.database();

// Get a reference to the root of the Database. All references start at the root.
var rootRef = defaultDatabase.ref();

var username = prompt("Please enter a username.");

$(document).ready(function() {
					loadWelcomeMessage();
					loadContent(); 
					$("#namebox").val(username);
					console.log("Done with setup.")
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
	var msg  = $("#messagebox").val();
	
	if(msg.length > 0 && name.length > 0)
	{
		var time = new Date();
		
		console.log("Sending message from '" + name + "' with contents '" + msg + "'");
		
		rootRef.child("messages").child("" + time.getTime() + "_" + name).set({
			username: name,
			message: msg,
			timestamp: time.getTime(),
		});
	}
	else
		alert("You can't send a message with an empty username and/or no message text.");
	
	$("#messagebox").val("");
}

function loadContent() {
	rootRef.child("messages/").on('value', function(snapshot) {
		$("#messages-inner").html("");
		snapshot.forEach(function(childSnapshot) {
			var msgDate = new Date(childSnapshot.child("timestamp").val());
			var newOuterMessage = $("<div class='message'></div>");
			var newMessageLeft = $("<span class='messageLeft'></span>").text(
				childSnapshot.child("username").val() + 
				" (" + msgDate.toLocaleDateString("en-US", {hour: "numeric", minute:"2-digit"}) + ")"
				);
			var newMessageRight = $("<span class='messageRight'></span>").text(childSnapshot.child("message").val());
			newOuterMessage.append(newMessageLeft, $("<span>   </span>"), newMessageRight);
			$("#messages-inner").append(newOuterMessage);
		});
		$('#messages-outer').scrollTop($('#messages-outer')[0].scrollHeight);
	});
}