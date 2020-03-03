const Client = require('../models/clients');


const getAllClients = (req, res) => {
	Client.getAllClients((err, results) => {
		if (err) {
			console.log(err);
			res.status(500).json({ message: 'Error getting all the clients information' });
		} else {
			res.json(results);
		}
	});

};

const addNewClient = (req, res) => {
	if (req.body.name === undefined || req.body.name.trim() === '') {
		res.status(400).json({ message: 'Name is not defined!' });
		return;
	}

	Client.addNewClient(req.body.name.trim(), (err, results, fields) => {
		if (err) {
			console.log(err);
			res.status(500).json({ message: 'Error getting all the clients information' });
			return;
		} else {
			res.sendStatus(200);
			return;
		}
	});

};

module.exports = { getAllClients, addNewClient }