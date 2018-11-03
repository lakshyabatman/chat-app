 const path=require('path');
 const express=require('express');
 const socketIO=require('socket.io');
 const http=require('http');
 const publicPath= path.join(__dirname,'../public');
 const port=process.env.PORT || 3000;
 var app=express();
 var server=http.createServer(app);
 var io=socketIO(server);
  
 app.use(express.static(publicPath));

 io.on('connection',(socket)=>{
     console.log("NEW USER");

     socket.on('disconnect',()=>{
         console.log("USER WENT AWAY!");
     });

     socket.emit('newEmail', {
         from:'lakshya@gmail.com',
         text:"HELLO THERE",
         createdAt: 123,
     });

     socket.emit('newMessage',{
         from:"Lakshya",
         text:"HEY BUDDY"
     });

     socket.on('createEmail',(newEmail)=>{
         console.log(newEmail);
     });

     socket.on('createMessage',(message)=>{
         console.log(message);
         io.emit('newMessage',{
             from:message.from,
             text:message.text,
             createdAt:new Date().getTime()
         })
     })
    });

 server.listen(port,()=>{
     console.log(`Server is up! on ${port}`);
 })
 