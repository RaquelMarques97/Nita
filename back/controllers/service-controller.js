const Service = require('../models/services');

const getAllServices = (req, res) => {
	Service.getAllServices((err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error getting all the services information' });
		} else {
			res.json(results);
		}
	});

};


const addNewServiceClient = (req, res) => {
	Service.addNewServiceClient(req.body, (err, results, fields) => {
		if (err) {
			console.log(err);
			res.status(500).json({ message: 'Error adding service information' });
			return;
		} else {
			res.sendStatus(200);
		}
	});

};


const getAllWork = (req, res) => {
	Service.getAllWork((err, results) => {
		if (err) {
			res.status(500).json({ message: 'Error getting all the services information' });
		} else {
			res.json(results);
		}
	});

};


module.exports = { getAllServices, addNewServiceClient, getAllWork }