const db = require('../models/articles')

var getAllArticles = (req, res) => {
  db.find()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
} 

var getArticleById = (req, res) => {
  db.findById(req.params.id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}
