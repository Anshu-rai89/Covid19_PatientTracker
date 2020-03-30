const passport=require('passport');
const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Docter=require('../models/doctor');

let opts =
{
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey:'zcWSL8dB5WEn5k9Af5r7nHWGPOUCiARe'
}


passport.use(new JwtStrategy(opts,function(jwtpayload,done)
{
    Docter.findById(jwtpayload._id,function(err,user)
    {
        if(err) {console.log("Error in finiding user from jwt");rerurn ;}

        if(user)
        {  console.log(user.name);
            return done(null,user);
        } else
        {
            return done(null,false);
        }
    });
}));

// function tocheck if header is undefined
// passport.checkToken(req,res,next)
// {
//     const header = req.headers['authorization'];

//     if(typeof header !== 'undefined') {
//         const bearer = header.split(' ');
//         const token = bearer[1];

//         req.token = token;
//         next();
//     } else {
      
//         res.sendStatus(403)
//     }
// }

module.exports=passport;