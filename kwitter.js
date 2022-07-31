function addUser() {

    user_name = document.getElementById("user_name").Value;

    localStorage.setItem("user_name", user_name);

    window.location = "Kwitter_room.html";
}


function addRoom()
{
    room_name = document.getElementById("room_name").Value;


    firebase.database().ref("/").child("room_name").update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);


    window.location = "kwitter_page.html";



}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    Window.location = "kwitter_page.html";
    
}