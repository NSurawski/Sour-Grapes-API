// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for wine
const Wine = require('../models/wine')

// require errors and handle 404
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /wines
router.get('/wines', requireToken, (req, res, next) => {
  Wine.find()
    .then(wines => wines.map(wine => wine.toObject()))
    .then(wines => res.status(200).json({ wines: wines }))
    .catch(next)
})

// SHOW
// GET /wines/5a7db6c74d55bc51bdf39793
// req.params.id will be set based on the `:id` in the route
router.get('/wines/:id', requireToken, (req, res, next) => {
  Wine.findById(req.params.id)
    .then(handle404)
    .then(wine => res.status(200).json({ wine: wine.toObject() }))
    .catch(next)
})

// INDEX user wines
// GET /wines/user
router.get('/mywines', requireToken, (req, res, next) => {
  console.log('user is ', req.user)
  Wine.find({ owner: req.user._id })
    .populate('owner', '_id email')
    .then(wines => wines.map(wine => wine.toObject()))
    .then(wines => {
      res.status(200).json({ wines: wines })
    })
    .catch(next)
})

// CREATE
// POST /wines
router.post('/wines', requireToken, (req, res, next) => {
  req.body.wine.owner = req.user.id
  Wine.create(req.body.wine)
    .then(wine => {
      res.status(201).json({ wine: wine.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /wines/5a7db6c74d55bc51bdf39793
router.patch('/wines/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.wine.owner
  Wine.findById(req.params.id)
    .then(handle404)
    .then(wine => {
      requireOwnership(req, wine)
      return wine.updateOne(req.body.wine)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /wines/5a7db6c74d55bc51bdf39793
router.delete('/wines/:id', requireToken, (req, res, next) => {
  Wine.findById(req.params.id)
    .then(handle404)
    .then(wine => {
      requireOwnership(req, wine)
      // delete the wine ONLY IF the above didn't throw
      wine.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
