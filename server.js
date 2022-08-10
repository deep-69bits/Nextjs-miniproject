
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const port = 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())




mongoose.connect("mongodb://localhost:27017/nextjsmini", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phonenumber:String,
    dob: String
})

const User = new mongoose.model("User", userSchema)

app.post("/register", (req, res)=> {
    const { name, email, phonenumber ,dob} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                phonenumber,
                dob
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered," })
                }
            })
        }
    })
}) 
app.get('/users',(req,res)=>{
    User.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
    
        res.send(userMap);  
      });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
