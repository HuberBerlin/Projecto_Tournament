// routes/movie.routes.js

const express = require('express');
const router = express.Router();
const { isLoggedIn, isLoggedOut } = require("../middleware/session-guard");
// GET route to display the form to create a new movie
router.get('/movies/create',isLoggedIn, (req, res) => res.render('movie-views/movie-create'));

// **** require Movie model in order to use it ****
const Movie = require('../models/Movie.model');
 
// ********* require fileUploader in order to use it *********
const fileUploader = require('../config/cloudinary.config');

router.post('/movies/create', fileUploader.single('movie-cover-image'), (req, res) => {
    const { title, description } = req.body;
   
    Movie.create({ title, description, imageUrl: req.file.path })
      .then(newlyCreatedMovieFromDB => {
        res.redirect('/movies');
        // console.log(newlyCreatedMovieFromDB);
      })
      .catch(error => console.log(`Error while creating a new movie: ${error}`));
  });
   

// GET route to display all the movies
router.get('/movies', isLoggedIn, (req, res) => {
    Movie.find()
      .then(moviesFromDB => {
        // console.log(moviesFromDB);
        res.render('movie-views/movies-list.hbs', { movies: moviesFromDB });
      })
      .catch(err => console.log(`Error while getting the movies from the DB: ${err}`));
  });


  module.exports = router;
