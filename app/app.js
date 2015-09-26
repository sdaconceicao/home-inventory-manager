/* global module, require */
'use strict';

var templates = require('../dist/templates')
    login = require('./modules/login/login');

angular.module('him', ['him.name', login.name])