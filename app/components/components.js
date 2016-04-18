/* global angular, module, require */
'use strict';

let restSvc = require('./rest/rest-service'),
    navMenu = require('./nav-menu/nav-menu-directive'),
    session = require('./session/session')
;

module.exports = angular.module('him.components', [restSvc.name, navMenu.name, session.name])
;
