
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");




const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
app.use(express.json());
app.use(cors(corsOptions))
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));


mongoose.connect("mongodb+srv://minh93nan:123456.@cluster0.qapa9.mongodb.net/task2?retryWrites=true&w=majority",{useNewUrlParser: true});



const userSchema = new mongoose.Schema ({
  username: String,
  email: String,
  birthdate: Date
});




const User = new mongoose.model("User", userSchema);
// -----------------------------insert dummy-------------------------
const user1 = new User( {
  username: "john.smith",
  email: "john.terry@email.com",
  birthdate: "1989-06-06"
});
const user2 = new User ({
  username: "dminh23",
  email: "dminh23@email.com",
  birthdate: "1999-06-23"
});
const user3 = new User ({
  username: "minh.duy",
  email: "minh.duy@email.com",
  birthdate: "1999-07-24"
});
user1.save();
// user2.save();
// user3.save();




// ------------------------------------------




app.get("/", function(req, res){

res.send("success");
});

app.get("/search", function(req, res){
  const userName = req.query.search;

  User.find({$or:[{username: { $regex: userName,$options:'i'}},{email:{ $regex: userName,$options:'i'}}]} , function(err,users){
  
    res.json(users); 

});

})

// ------------------------------------------

app.post("/edit", function (req, res) {
  var updatedObject = req.body;
  for(var i =0;i<updatedObject.length;i++){
   
    User.findOneAndDelete({id:updatedObject[i]._id}, function(err)  {
      console.log(err)
    });
    console.log(updatedObject);
  };
  
User.insertMany(updatedObject).then(function(){
    console.log("Data inserted")  
}).catch(function(error){
    console.log(error)      
});

   });


app.post("/:editUserName", function (req, res) {
  
});




// ------------------------------------------
app.listen(4000, function () {
    console.log("connected successfully!! u r in port 4000!");
})