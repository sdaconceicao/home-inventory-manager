let sService = require('./session-service'),
    sInjector = require('./session-injector');

module.exports = angular.module('him.session', [])
    .service('SessionService', sService)
    .factory('SessionInjector', sInjector);
