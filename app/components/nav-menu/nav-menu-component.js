class NavMenuCtrl{
    /* @ngInject */
    constructor($uibModal, $rootScope,
                SessionService, EventMediator,
                logoutConfig, loginConfig){
        this.SessionService = SessionService;
        this.EventMediator = EventMediator;
        this.$uibModal = $uibModal;
        this.$rootScope = $rootScope;
        this.logoutConfig = logoutConfig;
        this.loginConfig = loginConfig;
        this.loggedIn = this.SessionService.getSession().loggedIn;
        this.EventMediator.subscribe(this.$rootScope, 'session-updated', (session) => this.onSessionUpdated(session) );
    }

    toString(){
        return "NavMenuCtrl";
    }

    onSessionUpdated(session){
        console.log(this.toString() + "onSessionUpdated()", session);
        this.loggedIn =  this.SessionService.getSession().loggedIn;
    }

    loginModal() {
        this.instance = this.$uibModal.open(this.loginConfig);
    }

    logoutModal() {
        this.instance = this.$uibModal.open(this.logoutConfig);
    }

}

const navMenuComponentConfig = /* @ngInject */{
        template: require('./nav-menu.html'),
        replace: true,
        controller: NavMenuCtrl

};

module.exports = angular.module('him.navMenu', [])
    .component('navMenu', navMenuComponentConfig)
;
