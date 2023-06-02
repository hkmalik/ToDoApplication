const { createUser, getUsers } = require('../contollers/user')
const router = require("express").Router();

router.post('/save', createUser);
router.get('/get', getUsers);

module.exports = router;

