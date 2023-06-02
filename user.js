const { createUser, getUsers, login,create_Task, getTask } = require('../contollers/user')
const router = require("express").Router();
const { checkToken } = require('../tokenValidation');

router.post('/save', checkToken, createUser);
router.get('/get', checkToken, getUsers);
router.post('/tasks',checkToken,create_Task);
router.get('/gettask',checkToken,getTask);
router.post('/login',login,(req,res)=>{
    res.redirect('/homepage')
});
 
module.exports = router;

