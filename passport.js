const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./models/user.model');
const config = require('./config/config');
const googleToken=require('passport-google-plus-token')

exports.passport_JWT = function(passport){
 
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
  opts.secretOrKey = config.JWT_KEY;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("fdfgdfg")
    User.findById(jwt_payload._id, (err, user) => {
      if(err){
        return done(err, false);
      }
      if(user){
        return done(null, user);
      }
       else {
        return done(null, false);
      }
    });
  }));
}

module.exports.passport_google=function(passport){

  passport.use(new googleToken ({
    clientId: "234901085888-asqlpfje3tjt7nql1a5an60868p91s6k.apps.googleusercontent.com" ,
    clientSecret: "5EN3xEFbxHznNs8P2qLYTRsQ"
    
   } ,async(accessToken ,refreshToken,profile ,done)=>{
         console.log(accessToken)
         console.log(refreshToken)
         console.log(profile)
         
  }))
}