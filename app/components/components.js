/* global angular, module, require */
'use strict';

let httpSvc = require('./http/http-service'),
    navMenu = require('./nav-menu/nav-menu-component'),
    session = require('./session/session'),
    modal = require('./modal/modal-component'),
    modalConfirm = require('./modal-confirm/modal-confirm'),
    eventMediator = require('./event-mediator/event-mediator'),
    siteFooter = require('./site-footer/site-footer-component'),
    containerFadeIn = require('./container-fade-in/container-fade-in-directive')
;

module.exports = angular.module('him.components',
    [httpSvc.name, navMenu.name, session.name, modal.name, modalConfirm.name, siteFooter.name,
     containerFadeIn.name])
    .service('EventMediator', eventMediator)
;
