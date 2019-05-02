const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = function() {};

exports.signup = async function(req, res, next) {
  try {
    //create a user
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    //create a token
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl,
      },
      process.env.SECRET_KEY
    );
    //process.env.SECRET_KEY
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token,
    });
  } catch (err) {
    //see what kind of error
    //if it is a certain error
    //respond with username/email already taken
    //otherwise just send back a generic 400
  }
};
