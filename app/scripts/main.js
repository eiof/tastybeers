/*global define*/
define(function (require) {
    'use strict';

    var $ = require('jquery');

    var List = require('./components/list/list');
    var Distribution = require('./components/distribution/distribution');

    $(document).ready(function () {
        var list = new List();
        var dist = new Distribution();
        $('table.beer-list').append(list.$el);
        $('.distribution-chart').append(dist.$el);
    });
});