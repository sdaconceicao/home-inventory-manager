'use strict';

let ctrl = require('./inventory-view-controller')
    ;

module.exports = angular.module('him.inventoryView', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.inventory', {
                url: '/inventory/:id',
                views: {
                    'content@': {
                        templateUrl: 'inventory-view/inventory-view.html',
                        controller: 'InventoryViewCtrl as ctrl'
                    }
                },
                data: {}
            })
    }])
    .controller('InventoryViewCtrl', ctrl)
;
