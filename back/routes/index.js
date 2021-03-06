const express = require('express');
const router = express.Router();
const { getAllClients, addNewClient} = require('../controllers/client-controller');
const { getAllServices, addNewServiceClient, getAllWork, deleteWork} = require('../controllers/service-controller');

/* GET clients */
router.get('/clients', getAllClients);

/* POST clients */
router.post('/clients', addNewClient);

/* GET services */
router.get('/services', getAllServices);

/* POST clients */
router.post('/newservice', addNewServiceClient);

/* GET clients services */
router.get('/work', getAllWork);

/* DELETE client service */
router.delete('/work/:id', deleteWork);


module.exports = router;