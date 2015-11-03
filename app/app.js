/* global module, require */
'use strict';

let templates = require('../dist/templates'),
    login = require('./modules/login/login'),
    dependencies = ['ngAnimate', 'ui.router', 'mm.foundation',
        'him.templates', login.name
    ]
;

angular.module('him', dependencies)
    .config(['$locationProvider', '$urlRouterProvider', '$compileProvider',
        function($locationProvider, $urlRouterProvider, $compileProvider){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/login');
        $compileProvider.debugInfoEnabled(false);
    }])
    .run(['$templateCache', function ($templateCache){

    }])
;
