const db = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var getALlUsers = (req, res) => {
  db.find()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}
