#Workshop Outline

1. Download the workshop files from the Google Drive (code211.org/files) and unzip it.
2. Open up index.html and note the `PASTE-HERE` section.
3. Go to the firebase console website (https://console.firebase.google.com/) and create a new firebase app with a name of your choice. I suggest you do this from a personal google account rather than a school one so that you don't have to worry about transferring it over when you graduate.
4. Click the Web App Button (looks like this: </> ) and copy the snippet it provides into the `PASTE-HERE` segment of `index.html`
5. In the firebase console, click `Database` on the left. We don't want to use Cloud Firestore, so scroll down a bit and click `Create database` in the Or choose Realtime Database section.
6. Mark the bubble for `Test Mode`. We won't mess with authentication here because it requires the page to be hosted on a webserver to work, which can be time consuming given school restrictions and not the goal of this workshop. Click `Enable`.
7. Hover next to the root node and create a new tag by clicking the `+`. Name the tag `welcome-msg` and set the value to something of your choosing. We will use this field to test our database later on.
8. Open up the (empty) `firebase_scripts.js` file. Let's start off by getting some resources from that the firebase snipped we pasted into `index.html`. The snippet that we pasted created a 'default app'. Firebase's Javascript implementation allows you to link to multiple different firebase projects from the same code. We'll just be using one though. Get the default app with firebase.app(); and store it to a variable (I used defaultApp) for use later. If you want you can test that this worked by logging `defaultApp.name` to the console; it will print "[DEFAULT]".

   My code so far:
   ```
      var defaultApp = firebase.app();

      console.log("Default app name: " + defaultApp.name);  // Will print "[DEFAULT]"
   ```

9. We have an instance of the firebase project we created loaded now, but firebase is many parts. We'll just be using the database for now. If you want to add authentication later, you can use a similarly formatted line. Add the line below.

          var defaultDatabase = defaultApp.database();

10. The HTML template I supplied has jQuery imported, and we're going to use it to make a function for when the page finishes loading. We'll run two methods, one that loads a welcome message (to demonstrate reading a value once) and one that makes the messages box update every time a message is sent.

```
						$(document).ready(function() {
										loadWelcomeMessage();
										loadContent(); 
										console.log("Done with setup.")
						}); 
```
11. 
