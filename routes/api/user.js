const express = require('express');
const router = express.Router();
const User = require('../../models/Users')
const {check, validationResult} = require('express-validator');

router.post('/',
  [check('name','name field can not be blank').notEmpty(),
            check('email','it must be a email').isEmail()
  ],
  async (req, res) =>
  {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({'mess':errors.array()})
    }

    const {name, email} = req.body;

    try{
      //check if user already exists
      const user = User.findOne('email')
      if(user){
        res.send('User alredy exists')
      }
      res.send('get user');
    }catch (err){
      console.error(err.message);
    }

  })

module.exports = router;
