/* global module, angular */
'use strict';

class LogoutCtrl {
    /* @ngInject */
    constructor($state, $uibModalInstance, LogoutService){
        this.state = $state;
        this.$uibModalInstance = $uibModalInstance;
        this.LogoutService = LogoutService;
    }
    toString(){
        return 'LogoutCtrl';
    }

    logout (){
        this.$uibModalInstance.close();
        this.LogoutService.logout()
            .then(()=>{
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
