const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')

app.set('view engine', 'handlebars')
let transporter = nodemailer.createTransport({
   service:"gmail",
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass,
    },
  });
  let mailOptions = {
    from: "",
    to:"",
    subject:"",
    text:""
  }

  transporter.sendMail(mailOptions, (err,success)=>{
    if(err){
        console.log(err)
    }else{
        console.log("email send success")
    }
  })
// public folder
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000, ()=>{
    console.log("server started")
})