/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var _ = require('underscore');

    var Beers = require('resources/beers');
    var BeerFamily = require('components/distribution/beer-family');

    // Distribution of Families I've Drank
    var BeerFamilies = Backbone.Collection.extend({
        model: BeerFamily,
        initialize: function () {
            this.listenTo(Beers, 'sync', this.populate, this);
        },
        populate: function () {
            var families = _.countBy(Beers.models, function (model) {
                return model.get('family');
            });
            _.each(families, function (value, key) {
                this.add({name: key, count: value});
            }, this);
        }
    });

    return BeerFamilies;
});
