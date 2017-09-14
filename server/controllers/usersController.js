const db = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var getAllUsers = (req, res) => {
  db.find()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var signup = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, salt);
  db.create({
    username: req.body.username,
    password: hash
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var signin = (req, res) => {
  db.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(data => {
    console.log(data);
    if (data !== null) {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        var token = jwt.sign({
          _id: data._id,
          username: data.username
        }, proccess.env.SECRET_KEY)
        res.send({
          token: token,
          id: _id,
          username: username
        })
      } else {
        res.send('password anda salah')
      }
    } else {
      res.send('username salah')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllUsers,
  signup,
  signin
}
