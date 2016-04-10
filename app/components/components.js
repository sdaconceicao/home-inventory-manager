/* global angular, module, require */
'use strict';

let restSvc = require('./rest/rest-service'),
    navMenu = require('./nav-menu/nav-menu-directive')
;

module.exports = angular.module('him.components', [restSvc.name, navMenu.name])
;
