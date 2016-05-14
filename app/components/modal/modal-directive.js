/* $, global angular, module, require */
'use strict';

class ModalCtrl{

    /* @ngInject */
    constructor(){
        this.enableClose = this.enableClose ? this.enableClose : true;
    }

    close(){
        this.instance.dismiss('cancel');
    }
}

const modal = /* @ngInject */() =>{
    return {
        templateUrl: 'modal/modal.html',
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: ModalCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            instance: '=',
            enableClose: '='
        }
    };
};

module.exports = angular.module('him.modal', [])
    .directive('modal', modal)
;

