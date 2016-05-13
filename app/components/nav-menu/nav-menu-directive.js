/* $, global angular, module, require */
'use strict';

class NavMenuCtrl{
    constructor(SessionService, $uibModal, logoutConfig){
        this.SessionService = SessionService;
        this.$uibModal = $uibModal;
        this.logoutConfig = logoutConfig;
        this.session = this.SessionService.getSession();
        this.loggedIn = this.session.loggedIn;
    }

    logoutConfirm() {
        this.$uibModal.open(this.logoutConfig);
    }

}

function navMenu(SessionService, $uibModal, logoutConfig){
    return {
        templateUrl: 'nav-menu/nav-menu.html',
        restrict: 'E',
        replace: true,
        controller: ['SessionService', '$uibModal', 'logoutConfig', NavMenuCtrl],
        controllerAs: 'ctrl',
        bindToController: true
    };
}

module.exports = angular.module('him.navMenu', [])
    .directive('navMenu', navMenu)
;
