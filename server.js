var express= require("express");

var app=express();

app.listen(2011,function(){
    console.log("congratulation server conneted");
})

app.use(express.static("public"));

app.get("/hello",function(req,resp){
   resp.contentType("text/html");
    resp.write("<b> Hello <br> Developer</b>");
    resp.end();
})

//URL Handler
app.get("/info",function(req,resp){
    resp.contentType("text/html");
    resp.write("Dir Name:- "+__dirname+"<br>");
    resp.write("File Name:- "+__filename+"<br>");
    resp.end();
})
app.get("/datetime",function(req,resp){
    resp.contentType("text/html");
    var cur=new Date();
    resp.write("Current Date="+cur.toDateString()+"<br>");
   resp.write("Current Time="+cur.toTimeString()+"<br>");
    resp.end();
})
app.get("/",function(req,resp){
    var path=__dirname+"/public/index.html";
    resp.sendFile(path);
})
app.get("/Signup-here",function(req,resp){
    var path=process.cwd()+"/public/signup.html";
    resp.sendFile(path);
})
 app.get("/Signup-process",function(req,resp){
    console.log(req.query);
    var {nEmail,nPwd}=req.query;
    resp.send("Welcome:"+nEmail +"Password:"+nPwd);
})
app.get("/login-here",function(req,resp){
    var path=process.cwd()+"/public/login.html";
    resp.sendFile(path);    
})
app.get("/login-process",function(req,resp){
    console.log(req.query)
    var {nEmail,nPwd}=req.query;
    resp.send("Welcome:"+nEmail +"Password:"+nPwd);
})
app.get("/Signup-here-secure",function(req,resp){
    var path=process.cwd()+"/public/signup-secure.html";
    resp.sendFile(path);
})
app.use(express.urlencoded({extended:true}));
app.post("/Signup-process-post",function(req,resp){
    console.log(req.body);
    var {nEmail,nPwd}=req.body;
    resp.send("Welcome:"+nEmail +"Password:"+nPwd);
})