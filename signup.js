const express=require("express"); 
const bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://sapinosomille:johnpaul360@cluster0.3lelv.mongodb.net/signupHasharon?retryWrites=true&w=majority&appName=Cluster0'); 
const db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 


app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/sign_up', function(req,res){ 
	var name = req.body.name; 
	var email =req.body.email; 
	var pass = req.body.password; 
	var phone =req.body.phone; 

	var data = { 
		"name": name, 
		"email":email, 
		"password":pass, 
		"phone":phone 
	} 
    db.collection('details').insertOne(data, function(err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
      });
      return res.redirect('successful.html'); // Corrected syntax
    });

app.get('/',function(req,res){ 
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 
return res.redirect('index.html'); 
}).listen(5500) 


console.log("server listening at port 5500");