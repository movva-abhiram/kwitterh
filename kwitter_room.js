const firebaseConfig = {
      apiKey: "AIzaSyAsqr9AdUho0lowI1D9YcTRgHgNPQ7TklQ",
      authDomain: "kwitter-d57a5.firebaseapp.com",
      databaseURL: "https://kwitter-d57a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-d57a5",
      storageBucket: "kwitter-d57a5.appspot.com",
      messagingSenderId: "353823032",
      appId: "1:353823032:web:85653b4bc4fff6385179cd"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name -" + Room_names);
      row = "<div class='room_name ' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room_name", name);
         window.location = "lwitter_page.html";

      
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}



