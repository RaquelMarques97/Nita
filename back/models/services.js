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


// get list of all services per client
Service.getAllWork = (callback) => {
	connection.query(
		`SELECT
		service.name AS 'service',
		client.name AS 'client',
		client.id AS 'client_id',
		service.price AS 'price'
		FROM
		service, client, client_service
		WHERE
		service.id = client_service.service_id
		AND
		client.id = client_service.client_id
		
		`, (err, results) => {
		callback(err, results);
	});
};

module.exports = Service;

