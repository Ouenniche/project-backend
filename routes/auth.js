const express=require('express')
const { signUp, signIn, curent } = require('../controllers/authController')
const isAuth = require('../middleware/isAuth')
const { registerRules, validator, loginRules } = require('../middleware/validator')
const router=express.Router()

router.post('/signup',registerRules,validator,signUp)
router.post('/signin',loginRules,validator,signIn )
router.get('/curent',isAuth,curent)

module.exports=router