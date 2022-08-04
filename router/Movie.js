const express = require('express');
const movie = require('../models/movie');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const response = await movie.find();
        console.log("data showed");
        res.status(200).json(response);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

router.put('/', async (req, res) => {
    try {
        const tempName = req.body.movie_name;
        const response = await movie.findOneAndUpdate({ 'movie_name': tempName }, req.body, { new: true });
        res.status(200).json(response);
        console.log("data is updated");
    }
    catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:movie_name', async (req, res) => {
    try {
        const temp = req.params.movie_name;
        const response = await movie.deleteOne({ 'movie_name': temp });
        res.status(200).json(response);
        console.log("data deleted");
    }
    catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const tempMovie = new movie({
            movie_name: req.body.movie_name,
            rating: req.body.rating,
            cast: req.body.cast,
            genre: req.body.genre,
            release_date: req.body.release_date
        })
        const response = await tempMovie.save();
        console.log("data created");
        res.status(201).json(response);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
