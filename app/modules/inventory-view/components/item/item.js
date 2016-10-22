
let dir = require('./item-directive'),
    svc = require('./item-service');

module.exports = angular.module('him.item', [])
    .directive('item', dir)
    .service('ItemService', svc)
;
