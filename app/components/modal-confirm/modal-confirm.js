/* global angular, module, require */
'use strict';

let ctrl = require('./modal-confirm-controller')
    ;

module.exports = angular.module('him.modalConfirm', [])
    .constant('modalConfirmConfig', {
        animation: true,
        templateUrl: 'modal-confirm/modal-confirm.html',
        controller: 'ModalConfirmCtrl',
        controllerAs: 'ctrl',
        size: 'sm'
    })
    .controller('ModalConfirmCtrl', ctrl)
;