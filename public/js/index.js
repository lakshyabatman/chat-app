var socket=io();
var name;
socket.on('connect',function(){
    name=prompt('Write your nick name');
});

socket.on('welcomeMessage',function(message){
    alert(message.text+ " " + name);
});

socket.on('disconnect',function(){
    alert("Cannot reconnect");
});

//socket.on('newEmail',function(email){
//    console.log(email);
//});

socket.on('newMessage',function(message){
    let li= document.createElement('li');
    li.innerHTML=message.from + " said " + message.text;
    document.getElementById('chat').appendChild(li);
});

document.getElementById('myform').addEventListener('submit',function(e){
    message=document.getElementById('message').value;
    socket.emit('createMessage',{
        from:name,
        text:message,
    });
    document.getElementById('message').value="";
    e.preventDefault();
});
