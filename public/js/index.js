var socket=io();
var name;
socket.on('connect',function(){
    while(!name || name==null || name==undefined){
        name=prompt("Write your name here:")
    }
    });

socket.on('welcomeMessage',function(message){
    alert(message.text+ " " + name);
    socket.emit('createMessage',{
        from:"Admin",
        text:name + " just joined the chat!", 

    })
});

socket.on('disconnect',function(){
    alert("Cannot reconnect");
});

//socket.on('newEmail',function(email){
//    console.log(email);
//});

socket.on('newMessage',function(message){
    if(message.from=="Admin"){
        let li= document.createElement('li');
        li.className="list-group-item list-group-item-primary";
        li.innerHTML="<b>"+message.from + "</b> : " + message.text;
        document.getElementById('chat').appendChild(li);
    }
    else{
        let li= document.createElement('li');
        li.className="list-group-item list-group-item-dark";
        li.innerHTML="<b>" +message.from + "</b> : "  + message.text;
        document.getElementById('chat').appendChild(li);
    }
    
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
