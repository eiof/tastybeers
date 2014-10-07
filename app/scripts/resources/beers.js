/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var Beer = require('resources/beer');

    // Collection of beers
    var Beers = Backbone.Collection.extend({
        url: 'scripts/data.json', // Usually an API endpoint
        model: Beer,
        initialize: function () {
            this.fetch();
        },
        parse: function (response) {
            return response.beers;
        }
    });

    // Return a new instance of a singleton
    return new Beers();
});
