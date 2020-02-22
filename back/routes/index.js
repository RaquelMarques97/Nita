const express = require('express');
const router = express.Router();
const { getAllClients} = require('../controllers/client-controller');

/* GET clients */
router.get('/', getAllClients);



module.exports = router;