/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var TastyBeers = require('./tasty-beers');

    // View for family distribution
    var Distribution = Backbone.View.extend({
        tagName: 'tbody',
        initialize: function () {
            this.collection = new TastyBeers();
            this.listenTo(this.collection, 'add', this.renderItem);
            this.render();
        },
        renderItem: function (model) {
            this.$el.append('<tr><td></td><td>' + model.get('brewery') + '</td><td><i>' + model.get('name') + '</i></td><td>' + model.get('category') + '</td></tr>');
        }
    });

    return Distribution;
});