const connection = require('../helpers/db.js');

const Service = {};

// get list of all projects
Service.getAllServices = (callback) => {
	connection.query(
		`
			SELECT * FROM service
		`, (err, results) => {
		callback(err, results);
	});
};

module.exports = Service;