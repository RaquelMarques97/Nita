const connection = require('../helpers/db.js');

const Client = {};

// get list of all clients
Client.getAllClients = (callback) => {
	connection.query(
		`
			SELECT * FROM client
		`, (err, results) => {
		callback(err, results);
	});
};

// add new client
Client.addNewClient = (name, callback) => {
	connection.query('INSERT INTO client SET name=?',
		name,
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

module.exports = Client;