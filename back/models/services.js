const connection = require('../helpers/db.js');

const Service = {};

// get list of all services
Service.getAllServices = (callback) => {
	connection.query(
		`
			SELECT * FROM service
		`, (err, results) => {
		callback(err, results);
	});
};

// add new service
Service.addNewServiceClient = (serviceInfo, callback) => {
	connection.query('INSERT INTO client_service SET date=?, client_id=?, service_id=?',
		[serviceInfo.date, serviceInfo.client_id, serviceInfo.service_id],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

module.exports = Service;