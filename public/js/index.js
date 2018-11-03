var socket=io();

socket.on('connect',function(){
    console.log("Connected to server!");

    socket.emit('createEmail',{
        to:"lakshya.khera@gmail.com",
        text:"NEW EMAILL",
    });


    socket.emit('createMessage',{
        from :'lakshya',
        text:"HEY THERE",
    })
});

socket.on('disconnect',function(){
    console.log("Server is dead!!");
});

socket.on('newEmail',function(email){
    console.log(email);
});

socket.on('newMessage',function(message){
    console.log(message);
});

