/* global angular, module, require */
'use strict';

let restSvc = require('./rest/rest-service'),
    navMenu = require('./nav-menu/nav-menu-directive'),
    session = require('./session/session'),
    modal = require('./modal/modal-directive'),
    modalConfirm = require('./modal-confirm/modal-confirm'),
    eventMediator = require('./event-mediator/event-mediator')
;

module.exports = angular.module('him.components',
    [restSvc.name, navMenu.name, session.name, modal.name, modalConfirm.name])
    .service('EventMediator', eventMediator)
;
