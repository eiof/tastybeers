/*global require */
'use strict';

/* RequireJS Configuration (dependency definitions) */
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        charjs: {
            exports: 'Chart'
        },
        bootstrapModal: {
            deps: ['jquery'],
            exports: 'Tab'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrapModal: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal',
        chartjs: '../bower_components/chartjs/Chart'
    }
});