var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/logement/');


var HousingSchema = new mongoose.Schema({
    _id: { type: String, index: true },
    name: { type: String, required: true },
    description: String,
    comments: [{ body: String, date: { type: Date, default: Date.now }}],
});
exports.Housing = mongoose.model('Housing', HousingSchema);


var CitySchema = new mongoose.Schema({
    _id: { type: String, index: true },
    name: { type: String, required: true },
    description: String,
    housings: [HousingSchema]
});
exports.City = mongoose.model('City', CitySchema);


