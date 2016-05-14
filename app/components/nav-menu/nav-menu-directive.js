/* $, global angular, module, require */
'use strict';

class NavMenuCtrl{
    constructor(SessionService, $uibModal, logoutConfig, loginConfig){
        this.SessionService = SessionService;
        this.$uibModal = $uibModal;
        this.logoutConfig = logoutConfig;
        this.loginConfig = loginConfig;
        this.session = this.SessionService.getSession();
        this.loggedIn = this.session.loggedIn;
    }

    loginModal() {
        this.instance = this.$uibModal.open(this.loginConfig);
        this.loginConfig.instance = this.instance;
    }

    logoutModal() {
        this.instance = this.$uibModal.open(this.logoutConfig);
        this.logoutConfig.instance = this.instance;
    }

}

const navMenu = (SessionService, $uibModal, logoutConfig) => {
    return {
        templateUrl: 'nav-menu/nav-menu.html',
        restrict: 'E',
        replace: true,
        controller: ['SessionService', '$uibModal', 'logoutConfig', 'loginConfig', NavMenuCtrl],
        controllerAs: 'ctrl',
        bindToController: true
    };
};

module.exports = angular.module('him.navMenu', [])
    .directive('navMenu', navMenu)
;
