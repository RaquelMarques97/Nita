const Service = require('../models/services');


const getAllServices = (req, res) => {
	Service.getAllServices((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the services information' });
		} else {
            res.json(results);
            req.services = results;
        next();
		}
    });
    
};

module.exports = { getAllServices }