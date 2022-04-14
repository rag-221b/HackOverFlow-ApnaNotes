const express = require('express');
// const{LEGAL_TCP_SOCKET_OPTIONS} = require('mongodb');
const passport = require('passport')
const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), 
(req,res) =>{
    res.redirect('/dashboard')
}
)



router.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/')
})


module.exports = router