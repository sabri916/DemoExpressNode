const router = require('express').Router();
const {check, validationResult} = require('express-validator');

const {User} = require('../models/user-models');
const userValidator = require('../models/user-models').userValidator

router.get('/profile', (req, res) => {
    const user = new User(23,'Sabri', 'sabri@email.com', 'user');
    res.json(user);
});

router.post('/profile', userValidator, 
(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
        const name = req.body.name;
        const email = req.body.email;
        const role = req.body.role;
        res.json(new User(23, name, email, role));
});

module.exports = {
    router
}