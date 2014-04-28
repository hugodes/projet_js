var assert = require('chai').assert;
 
var City = require('./models').City;

describe("City", function  () {
	describe("constructor", function  () {
		it("should have a name", function  () {
			var hebergement = new City( { name : 'Valence' } );
			assert.equal(hebergement.name, 'Valence', 'Le nom de vile est bien "Valence" ')
		})
	})
})