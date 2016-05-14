/* global module, angular */
'use strict';

class LogoutCtrl {
    /* @ngInject */
    constructor($state, $uibModalInstance, SessionService, LogoutService){
        this.state = $state;
        this.$uibModalInstance = $uibModalInstance;
        this.SessionService = SessionService;
        this.LogoutService = LogoutService;
    }
    toString(){
        return 'LogoutCtrl';
    }

    logout (){
        this.LogoutService.logout()
            .then(()=>{
                this.SessionService.resetSession();
                this.$uibModalInstance.close();
                this.state.go('home');
            })
            .catch((e)=>{
                console.log(this.toString() + 'logout() error', e);
            });
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }

}

module.exports = LogoutCtrl;
