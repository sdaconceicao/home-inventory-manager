'use strict';

let dir = require('./inventory-directive'),
    svc = require('./inventory-service');

module.exports = angular.module('him.inventory', [])
    .directive('inventory', dir)
    .service('InventoryService', svc);
