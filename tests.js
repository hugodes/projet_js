var assert = require('chai').assert;
 
var City = require('./models').City;
var Housing = require('./models').Housing;


// ------------------ Tests sur les Villes----------------------
describe("City", function  () {
	describe("constructor", function  () {
		it("doit avoir un nom", function  () {
			var ville = new City( { name : 'Valence' } );
			assert.equal(ville.name, 'Valence', 'Le nom de vile est bien "Valence" ')
		})
	})
})

describe("City", function  () {
	describe("constructor", function  () {
		it("doit avoir un ID", function  () {
			var ville = new City( { name : 'Valence' } );
			ville._id = 'valence';
			assert.equal(ville._id, 'valence', 'L ID est bien "valence" ');
		})
	})
})

describe("City", function  () {
	describe("constructor", function  () {
		it("doit avoir une description", function  () {
			var ville = new City( { name : 'Valence' } );
			ville.description = 'Description';
			assert.equal(ville.description, 'Description', 'L ID est bien "Description" ');
		})
	})
})

describe("City", function  () {
	describe("constructor", function  () {
		it("doit avoir un hebergement", function  () {
			var ville = new City( { name : 'Valence' } );
			var hebergement = new Housing( { name : 'Maison' })
			ville.housings[0] = hebergement;
			assert.equal(ville.housings[0], hebergement, 'L ID est bien "valence" ');
		})
	})
})



// ------------------ Tests sur les Hebergements----------------------


describe("Housing", function  () {
	describe("constructor", function  () {
		it("doit avoir un nom", function  () {
			var hebergment = new Housing( { name : 'Maison' } );
			assert.equal(hebergment.name, 'Maison', 'Le nom de l hebergement est bien "Maison" ')
		})
	})
})

describe("Housing", function  () {
	describe("constructor", function  () {
		it("doit avoir un ID", function  () {
			var hebergment = new Housing( { name : 'Maison' } );
			hebergment._id = 'maison';
			assert.equal(hebergment._id, 'maison', 'L ID de l hebergement est bien "maison" ')
		})
	})
})

describe("Housing", function  () {
	describe("constructor", function  () {
		it("doit avoir une description", function  () {
			var hebergment = new Housing( { name : 'Maison' } );
			hebergment.description = 'Description';
			assert.equal(hebergment.description, 'Description', 'La  de l hebergement est bien "Description" ')
		})
	})
})

describe("Housing", function  () {
	describe("constructor", function  () {
		it("doit avoir un commentaire", function  () {
			var hebergment = new Housing( { name : 'Maison' } );
			hebergment.comments[0] = {body : 'Commentaire'};
			assert.equal(hebergment.comments[0].body, 'Commentaire', 'Le commentaire est bien "Commentaire" ');
		})
	})
})




