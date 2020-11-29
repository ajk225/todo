const express = require('express');

const router = express.Router();

const User = require('../models/user');
router.get('/',(req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

router .post('/', (req,res) =>{
    const { name,email } = req.body;
    const newUser = new User({
        name: name, email: email
    })
    newUser.save()
        .then(() => res.json({
            "message": "Created account successfully"
        }))
        .catch(err => alert(err))
        
})
module.exports = router