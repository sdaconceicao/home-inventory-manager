let ctrl = require('./inventory-view-controller'),
    item = require('./components/item/item'),
    category = require('./components/category/category');

module.exports = angular.module('him.inventoryView', [item.name, category.name])
    .config(['$stateProvider', ($stateProvider) =>{
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
