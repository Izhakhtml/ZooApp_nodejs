const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtStrategy = require('passport-jwt').Strategy;
const Users = require('../model/Users-model')
const option = {
secretOrKey:process.env.secretOrKey,
jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports =  (passport) => {
    passport.use(
        new jwtStrategy(option, (payload, done) => {
              Users.findOne({ _id: payload.user._id }, (err, result) => {
                if (err) return done(null, false);
                if (result) return done(null, result);
                return done(null, false)
            })
        })
    )
}
