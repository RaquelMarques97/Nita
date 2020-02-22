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
// Client.AddNewClient = () => {
// 	connection.query('INSERT INTO client (name) VALUES (?)', [req.body.name],
// 		function (error, results, fields) {
// 			if (error)
// 				res.status(500).json({ flash: error.message });
// 			else
// 				res.status(200).json({ flash: "Cliente adicionado!" });
// 		});
// }

module.exports = Client;