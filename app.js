slugify = function(str) {
         return str.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

//Models
window.City = Backbone.Model.extend({
        idAttribute: '_id',
    });

window.CityCollection = Backbone.Collection.extend({
        model: City,
        url: "http://localhost:3000",
        comparator: 'name',
    });

window.Housing = Backbone.Model.extend({
        idAttribute: '_id',
    });

window.HousingCollection = Backbone.Collection.extend({
        model: Housing,
    });

window.CityItemView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($("#tpl-city-item").html()),
        events: {
            'click a': 'onClick'
        },
        render: function() {
            var dict = this.model.toJSON();
            var html = this.template(dict);
            console.log("coucou 1" + html);

            this.$el.html(html);
            return this;
        },
        onClick: function(event) {
            event.preventDefault();
            var url = event.target.pathname;
            Backbone.history.navigate(url, { trigger: true });
        }
    });
window.CityCollectionView = Backbone.View.extend({
        el: '#sidebar-menu',
        initialize: function() {
            this.listenTo(this.collection, 'reset', this.render);
            this.collection.fetch({ reset: true });
        },
        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function(city) {
            var cityView = new CityItemView({ model: city });
            this.$el.append(cityView.render().el);

        }
    });

window.CityDetailView = Backbone.View.extend({
        el: '#content',
        template: _.template($("#tpl-city-detail").html()),
        events: {
            'click ul.housings li a': 'onHostelClick',
            'submit form': 'onFormSubmit'
        },
        render: function() {
            var dict = this.model.toJSON();
            var html = this.template(dict);
            console.log("coucou 2");
            this.$el.html(html);
            return this;
        },
        onHostelClick: function(event) {
            event.preventDefault();
            var url = event.target.pathname;
            Backbone.history.navigate(url, { trigger: true });
        },
        onFormSubmit: function(event) {
            event.preventDefault();
            var name = $('#form-name').val();
            var desc = $('#form-desc').val();
            var slug = slugify(name);
            var data = {
                _id: slug,
                name: name,
                description: desc
            };

            var housing = new Housing(data);
            housing.urlRoot = this.model.url();

            var successHandler = _.bind(function(options, model, response) {
                if (response.xhr.status === 201) {
                    var housings = this.model.get('housings');
                    housings.push(housing.toJSON());
                    this.model.set('housings', housings);
                    this.render();
                }
            }, this);
            housing.save({}, { success: successHandler });
        }
    });

window.HousingDetailView = Backbone.View.extend({
        el: '#content',
        template: _.template($("#tpl-housing-detail").html()),
        render: function() {
            var dict = this.model.toJSON();
            var html = this.template(dict);
            this.$el.html(html);
            return this;
        }
    });

var AppRouter =Backbone.Router.extend({
        initialize: function() {
            this.cities = new CityCollection();
        },
        routes: {
            '': 'home',
            'cities/:city': 'city',
            'cities/:city/housings/:housing': 'housing'
        },
        home: function() {
            var cityCollectionView = new CityCollectionView({
                collection: this.cities
            });
        },
        city: function(citySlug) {
            var city = this.cities.get(citySlug);
            var cityView = new CityDetailView({ model: city });

            var renderCity = _.bind(cityView.render, cityView);
            city.fetch({ complete: renderCity });
        },
        housing: function(citySlug, housingSlug) {
            var housing = new Housing({ _id: housingSlug });
            housing.urlRoot = "http://localhost:3000/" + citySlug + '/';

            var housingView = new HousingDetailView({ model: housing });

            var renderHousing = _.bind(housingView.render, housingView);
            housing.fetch({ complete: renderHousing });
        }
    });

var app = new AppRouter();
Backbone.history.start();