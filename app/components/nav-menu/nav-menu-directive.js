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

const navMenuDirectiveConfig = ($window)=>/* @ngInject */{
    return {
        template: require('./nav-menu.html'),
        replace: true,
        controller: NavMenuCtrl,
        controllerAs: '$ctrl',
        link: function postLink(scope, element, attr) {
            $(document).ready(function () {
                let navTop = $(element).offset().top;

                angular.element($window).bind("scroll", function () {
                    let scrollTop = $(window).scrollTop();
                    $('.container').each(function () {
                        let topOfElement = $(this).offset().top,
                            topView = $(window).scrollTop(),
                            bottomView = topView + $(window).height();
                        if ((bottomView >= topOfElement)) {
                            scope.active = $(this).attr('id');
                        }
                    });
                    scope.$apply();
                    if (scrollTop > navTop) {
                        $(element).find('ul').addClass('fixed');
                    } else {
                        $(element).find('ul').removeClass('fixed');
                    }
                });
            });
        }
    }
};

module.exports = angular.module('him.navMenu', [])
    .directive('navMenu', navMenuDirectiveConfig)
;
