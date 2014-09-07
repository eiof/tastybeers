/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var BeerFamilies = require('./beer-families');

    var colors = {
        'Ale': '#CC561B',
        'Lager': '#FFDF49',
        'Hybrid': '#DB9B26'
    };

    var highlights = {
        'Ale': '#FF561E',
        'Lager': '#FEEA50',
        'Hybrid': '#FFAA27'
    };

    // View for family distribution
    var Distribution = Backbone.View.extend({
        tagName: 'canvas',
        className: 'family-distribution',
        attributes: {
            'height': '60',
            'width': '60'
        },
        initialize: function () {
            this.collection = new BeerFamilies();
            this.data = [];
            this.render();
            this.listenTo(this.collection, 'add', this.pushData, this);
        },
        pushData: function (model) {
            this.data.push({
                value: model.get('count'),
                color: colors[model.get('name')],
                highlight: highlights[model.get('name')],
                label: model.get('name') + (model.get('count') / this.collection.models.length)
            });
            this.$el.empty();
            var ctx = this.$el.get(0).getContext('2d');
            this.chart = new window.Chart(ctx).Doughnut(this.data,{
                animationEasing: 'easeOutQuart',
                animationSteps: 80
            });
        },
        render: function () {
            require('chartjs');
        }
    });

    return Distribution;
});