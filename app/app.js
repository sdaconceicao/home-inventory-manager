/* global module, require */
'use strict';

let templates = require('../dist/templates'),
    components = require('./components/components'),
    home = require('./modules/home/home'),
    login = require('./modules/login/login'),
    navMenu = require('./modules/nav-menu/nav-menu-directive'),
    dependencies = ['ngAnimate', 'ui.router', 'ui.bootstrap', 'satellizer',
        'him.templates', components.name, home.name, login.name, navMenu.name
    ]
;

angular.module('him', dependencies)
    .config(['$locationProvider', '$urlRouterProvider', '$compileProvider',
        function($locationProvider, $urlRouterProvider, $compileProvider){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/home');
        $compileProvider.debugInfoEnabled(false);
    }])
    .run(['$templateCache', function ($templateCache){

    }])
;
