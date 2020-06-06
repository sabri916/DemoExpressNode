const { check, validationResult } = require('express-validator');

class User {
    constructor(id, name, email, role) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._role = role;
    }
    get id() {
        return this.id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get role() {
        return this._role;
    }
    set role(role) {
        this_role = role;
    }
    toJSON() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            role: this._role
        }
    }
}

const userValidator = [
    check('name').trim().isLength({min: 3}).withMessage('Minimum of 3 characters'),
    check('email').trim().isEmail().withMessage('Must enter valid email'),
    check('email').custom(value => {
        console.log(value);
        if(value === 'sbrkrs@gmail.com') return Promise.reject('Email in use');
        return Promise.resolve();
    }),
    check('role').isIn(['admin','user'])
]

module.exports = {
    User,
    userValidator
}