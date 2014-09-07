/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var Beers = require('resources/beers');
    var TastyBeer = require('components/list/tasty-beer');

    // Names of the beers I've drank
    var TastyBeers = Backbone.Collection.extend({
        model: TastyBeer,
        initialize: function () {
            Beers.on('sync', this.populate, this);
        },
        populate: function () {
            this.set(Beers.models);
        }
    });

    return TastyBeers;
});