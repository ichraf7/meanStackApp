const express =require('express');
const path =require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const dbConfig =require('./config/config');
const app =express()
const users=require('./routes/users.routes');

//allowing cors
app.use(cors());

//pasing requests
app.use(bodyParser.json())

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//specify public directory
app.use(express.static(path.join(__dirname,'public')))

//users route
app.use('/users',users)


//invalide route
app.get('/',(req,res,next)=>{
    res.send("welcome")
})


//specify port
const port=3000
//start server
app.listen(port,()=>{
    console.log("server work on port "+port)
})
