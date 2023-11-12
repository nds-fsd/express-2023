const express = require('express');

const addDateMiddleware = (req, res, next) => {
    console.log('Request Type:', req.method);
    req.requestInstant = new Date();
    next();
};

const validateUser = (req, res, next) => {
    console.log('Request Type:', req.method);
    const user = req.body;
    
    if (user.name === undefined || user.name.length === 0) {
        res.status(400).send({message: 'name required'});
        return;
    }
    if (user.password === undefined) {
        res.status(400).send({message: 'password required'});
        return;
    }

    next();
};


module.exports = {
    addDateMiddleware,
    validateUser,
}