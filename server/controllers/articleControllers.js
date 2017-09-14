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

var createArticle = (req, res) => {
  db.create({
    title: req.body.name,
    content: req.body.content,
    category: req.body.category
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateArticle = (req, res) => {
  db.findOneAndUpdate({
    _id: req.params.id
  },{
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteArticle = (req, res) => {
  db.remove({
    _id: req.params.id
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
}
