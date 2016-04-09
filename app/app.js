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
    .config(/* @ngInject */($locationProvider, $urlRouterProvider, $compileProvider, $authProvider)=>{
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/home');
        $compileProvider.debugInfoEnabled(false);
        $authProvider.facebook({
            clientId: 'Facebook App ID',
            responseType: 'token'
        });
        $authProvider.google({
            clientId: 'Google Client ID'
        });
    })
    .run(/* @ngInject */ ($templateCache)=>{

    })
;
