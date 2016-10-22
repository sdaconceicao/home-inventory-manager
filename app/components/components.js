/* global angular, module, require */
'use strict';

let httpSvc = require('./http/http-service'),
    navMenu = require('./nav-menu/nav-menu-component'),
    session = require('./session/session'),
    modal = require('./modal/modal-component'),
    modalConfirm = require('./modal-confirm/modal-confirm'),
    eventMediator = require('./event-mediator/event-mediator')
;

module.exports = angular.module('him.components',
    [httpSvc.name, navMenu.name, session.name, modal.name, modalConfirm.name])
    .service('EventMediator', eventMediator)
;
