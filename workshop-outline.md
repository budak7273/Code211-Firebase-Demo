#Workshop Outline

1. Create a file called `index.html` and paste the contents of `starting-point.html` file on this Github into it.
2. Go to the firebase console website (https://console.firebase.google.com/) and create a new firebase app with a name of your choice. I suggest you do this from a personal google account rather than a school one so that you don't have to worry about transferring it over when you graduate.
3. Click the Web App Button (looks like this: </> ) and copy the snippet it provides into the `PASTE-HERE` segment of `index.html`
4. In the firebase console, click `Database` on the left. We don't want to use Cloud Firestore, so scroll down a bit and click `Create database` in the Or choose Realtime Database section.
5. Mark the bubble for `Test Mode`. We won't mess with authentication here because it requires the page to be hosted on a webserver to work, which can be time consuming given school restrictions and not the goal of this workshop. Click `Enable`.
6. Hover next to the root node and create a new tag by clicking the `+`. Name the tag `welcome-msg` and set the value to something of your choosing. We will use this field to test our database later on.
7. Back to coding. 
