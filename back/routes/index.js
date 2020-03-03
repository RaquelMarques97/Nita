const express = require('express');
const router = express.Router();
const { getAllClients, addNewClient} = require('../controllers/client-controller');
const { getAllServices, addNewServiceClient} = require('../controllers/service-controller');

/* GET clients */
router.get('/', getAllClients);

/* POST clients */
router.post('/', addNewClient);

/* GET services */
router.get('/services', getAllServices);

/* POST clients */
router.post('/newservice', addNewServiceClient);


module.exports = router;