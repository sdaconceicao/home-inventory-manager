class NavMenuCtrl{
    /* @ngInject */
    constructor($uibModal, $rootScope, $element,
                SessionService, EventMediator,
                logoutConfig, loginConfig){
        this.$element = $element;
        this.SessionService = SessionService;
        this.EventMediator = EventMediator;
        this.$uibModal = $uibModal;
        this.$rootScope = $rootScope;
        this.logoutConfig = logoutConfig;
        this.loginConfig = loginConfig;
    }

    toString(){
        return "NavMenuCtrl";
    }

    $onInit(){
        this.loggedIn = this.SessionService.getSession().loggedIn;
        this.EventMediator.subscribe(this.$rootScope, 'session-updated', (session) => this.onSessionUpdated(session) );
    }

    $postLink(){
        let navTop = this.$element.offset().top;
        $(window).bind("scroll",  ()=> {
            let scrollTop = $(window).scrollTop();
            if (scrollTop > navTop) {
                $(this.$element).find('ul').addClass('fixed');
            } else {
                $(this.$element).find('ul').removeClass('fixed');
            }
        });
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

const navMenuDirectiveConfig = {
    template: require('./nav-menu.html'),
    replace: true,
    controller: NavMenuCtrl
};

module.exports = angular.module('him.navMenu', [])
    .component('navMenu', navMenuDirectiveConfig)
;
