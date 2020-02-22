const Client = require('../models/clients');


const getAllClients = (req, res) => {
	Client.getAllClients((err, results) => {
		if(err) {
			console.log(err);
			res.status(500).json({ message: 'Error getting all the clients information' });
		} else {
			res.json(results);
		}
    });
    
};

module.exports = { getAllClients }