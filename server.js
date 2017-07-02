var express = require('express');
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 8000;
var FileMetaData = require('./models/filemetadata');


var app = express()
app.use(express.static('public'))

//mongoose.connect('mongodb://localhost/filemetadata');

mongoose.connect('mongodb://vikashhrs:12345@ds145312.mlab.com:45312/filemetadata');


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 

 
app.post('/upload', upload.single('avatar'), function (req, res) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  var filemetadata = new FileMetaData(req.file);
  filemetadata.save(function(err){
  	if(err)
  		res.send(err);
  	else
  		res.send({status : "file uploaded"})
  	})
  
})
 


// default options 
//app.use(fileUpload());//

app.get('/',function(req,res){
	res.send('/public/index.html')
})
 
app.listen(PORT,function(){
	console.log("Server running at port 3000");
})