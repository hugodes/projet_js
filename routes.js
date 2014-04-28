var models = require('./models.js');


exports.methodNotAllowed = function(req, res) {
    res.send(405, 'Method not allowed');
};

exports.getAllCities = function(req, res) {
    models.City.find(null, 'name description', function(err, cities) {
        cities = cities.map(function(city) {
            city = city.toJSON();
            city.url = '/' + city._id;
            return city;
        });
        res.send(cities);
    });
};

exports.getCity = function(req, res) {
    var slug = req.params.city;
    models.City.findById(slug, 'name description housings', function(err, city) {
        if (city === null) {
            res.send(404, 'Not found');
        } else {
            console.log(city = city.toJSON());
            console.log("COUCOU = " + city.housings + " " + city._id);
            city.url = '/' + city._id;
            city.housings = city.housings.map(function(housing) {
                housing.url = city.url + '/' + housing._id;
                return housing;
            });
            res.send(200, city);
        }
    });
};

exports.setCity = function(req, res) {
    if (!req.body.hasOwnProperty('name')) {
        res.send(400, 'The "name" parameter is required');
    }

    var slug = req.params.city;
    models.City.findById(slug, function(err, city) {
        if (err) {
            res.send(500, err);
        }

        var statusCode;
        if(city === null) {
            statusCode = 201; // created
            city = new models.City(req.body);
            city._id = slug;
        } else {
            statusCode = 200; // OK
            city.name = req.body.name;
            city.description = req.body.description;
        }

        city.save(function(err) {
            if (err) {
                res.send(500, err);
            }
            else {
                res.send(statusCode, city);
            }
        });
    });
};

exports.deleteCity = function(req, res) {
    var slug = req.params.city;
    models.City.findById(slug, function(err, city) {
        if (city !== null) {
            city.remove();
            res.send(200);
        } else {
            res.send(404);
        }
    });
};

exports.getHousing = function(req, res) {
    var slug = req.params.city;
    var housingSlug = req.params.housing;

    models.City.findById(slug, function(err, city) {
        if (city === null) {
            res.send(404, 'City not found');
        }

        var housing = city.housings.id(housingSlug);
        if (housing === null) {
            res.send(404, 'Housing not found');
        } else {
            res.send(200, housing);
        }
    });
};

exports.setHousing = function(req, res) {
    var slug = req.params.city;
    var housingSlug = req.params.housing;

    models.City.findById(slug, function(err, city) {
        if (city === null) {
            res.send(404, 'Not found');
        } else {
            var housing = city.housings.id(housingSlug);
            var statusCode;

            if (housing === null) {
                housing = new models.Housing(req.body);
                housing._id = housingSlug;
                city.housings.push(housing);
                statusCode = 201;
            } else {
                housing.name = req.body.name;
                housing.description = req.body.description;
                statusCode = 200;
            }

            console.log(city.save());
            console.log(housing.name + " a ete ajouter avec succes pour la ville " + slug + city.housings);
            res.send(statusCode, housing);
        }
    });
};

exports.deleteHousing = function(req, res) {
    var slug = req.params.city;
    var housingSlug = req.params.housing;

    models.City.findById(slug, function(err, city) {
        if (city === null) {
            res.send(404, 'City not found');
        } else {
            var housing = city.housings.id(housingSlug);

            if (housing === null) {
                res.send(404, 'Housing not found');
            } else {
                housing.remove();
                city.save();
                res.send(200);
            }
        }
    });
};

exports.createComment = function(req, res) {
    var slug = req.params.city;
    var housingSlug = req.params.housing;

    if (!req.body.hasOwnProperty('body')) {
        res.send(400, 'The "body" parameter is required');
    }

    models.City.findById(slug, function(err, city) {
        if (city === null) {
            res.send(404, 'City not found');
        } else {
            var housing = city.housings.id(housingSlug);
            if (housing === null) {
                res.send(404, 'Housing not found');
            } else {
                var comment = { body: req.body.body };
                housing.comments.push(comment);
                city.save();

                res.send(201, comment);
            }
        }
    });
};
