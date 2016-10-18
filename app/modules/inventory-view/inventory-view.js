let ctrl = require('./inventory-view-controller');

module.exports = angular.module('him.inventoryView', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('app.inventory', {
                url: '/inventory/:id',
                views: {
                    'content@': {
                        template: require('./inventory-view.html'),
                        controller: 'InventoryViewCtrl as ctrl'
                    }
                },
                data: {}
            })
    }])
    .controller('InventoryViewCtrl', ctrl)
;
