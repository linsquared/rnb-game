const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT } = process.env;
const MongoClient = require('mongodb').MongoClient


// using cors and middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// need to hide my info from this following string
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.wydxewy.mongodb.net/songs-quizs?retryWrites=true&w=majority`

MongoClient.connect(connectionString)
    .then(client => {
        console.log('connected to db')
        const db = client.db('songs-quizs')
        const songsCollection = db.collection('songs')

        // CRUD
        app.get('/viewall', (req, res) => {
            songsCollection
                .find()
                .toArray()
                .then(result => {
                    // console.log(result)
                    res.status(200).send(result)
                })
                .catch(error => {
                    res.status(500).send(error)
                    console.error(error)
                })
        })

        app.post('/add', (req, res) => {
            songsCollection
                .insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.status(200).send(result)
                })
                .catch(err => {

                    console.error(err)
                })
        })

        // listening
        app.listen(PORT || 8000, () => {
            console.log('listen up')
        })
    })
    .catch(error => console.log(error))






