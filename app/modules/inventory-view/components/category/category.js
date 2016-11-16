let dir = require('./category-directive'),
    svc = require('./category-service');

module.exports = angular.module('him.category', [])
    .directive('category', dir)
    .service('CategoryService', svc);
