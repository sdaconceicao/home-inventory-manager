let comp = require('./inventory-list-component'),
    inventory = require('./components/inventory/inventory');

module.exports = angular.module('him.inventoryNav', [inventory.name])
    .component('inventoryList', comp)
;
