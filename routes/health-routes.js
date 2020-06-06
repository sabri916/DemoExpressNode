const express = require('express');
const router = express.Router();
const MyError = require('../models/error-models').ErrorModel;

router.get('/ok', (req, res) => {
    res.send('ok');
});

router.get('/error', (req, res) => {
    console.log('Error =(');
    try {
        throw new Error('Error!!!');
    } catch (err) {
        console.log(err);
        res.status(500).json(new MyError(22,500, 'Error1'));
    }
});

router.get('/insane', (req, res) => {
    console.log('insne D=');
    throw new Error('Insane');
});

module.exports = {
    router
}