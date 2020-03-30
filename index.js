const express=require('express');
const port=9000;
// creating express app
const app=express();

//  requiring Database
const db=require('./configs/mongoose');

// using passport lib for authentication
const passport=require('passport');



const passportjwt=require('./configs/passport-jwt');


// using middlewares

app.use(express.urlencoded());

//app.use(passport.checkToken);


// setting our routes 
app.use('/',require('./routes'));

//  firing server here 
app.listen(port,function(err)
{
     if(err)  {console.log(`Error in running server:${port}`);return;}

     console.log(`Surver is up and Running at POrt :${port}`); return;
});