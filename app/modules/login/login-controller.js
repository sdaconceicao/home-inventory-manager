/* global module, angular */
'use strict';

class LoginCtrl {
    /* @ngInject */
    constructor($state, $auth, $uibModalInstance, SessionService, LoginService){
        this.state = $state;
        this.auth = $auth;
        this.$uibModalInstance = $uibModalInstance;
        this.LoginService = LoginService;
        this.SessionService = SessionService;
        this.inputType = 'password';
        this.mode = 'login';
    }
    toString(){
        return 'LoginCtrl';
    }
    onSuccess(user){
        console.log(this.toString() + ' onSuccess()', user);
        this.SessionService.startSession(user);
        this.$uibModalInstance.dismiss('cancel');
        this.state.go('app.dashboard');
    }
    onError(error){
        console.error(this.toString() + ' onError', error);
        this.error = error;
    }
    login (){
        this.LoginService.login(this.credentials).
            then((user)=>this.onSuccess(user), (error)=>this.onError(error));
    }
    authenticate(provider){
        this.auth.authenticate(provider);
    }
    register (){
        this.LoginService.register(this.credentials)
            .then((response)=>{
                console.log(this.toString() + ' register SUCCESS', response);
                this.login();
            })
            .catch((error)=>{
                console.error(this.toString() + ' register ERROR', error);
            });
    }
    registerToggle(){
        this.mode = this.mode === 'login' ? 'register' : 'login';
    }
}

module.exports = LoginCtrl;
