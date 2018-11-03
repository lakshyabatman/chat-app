var socket=io();

socket.on('connect',function(){
    console.log("Connected to server!");

});

socket.on('welcomeMessage',function(message){
    alert(message.text);
});

socket.on('disconnect',function(){
    console.log("Server is dead!!");
});

socket.on('newEmail',function(email){
    console.log(email);
});

socket.on('newMessage',function(message){
    console.log(message.text);
});

