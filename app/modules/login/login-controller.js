/* global module, angular */
'use strict';

class LoginCtrl {
    /* @ngInject */
    constructor($state, $auth, SessionService, LoginService){
        this.state = $state;
        this.auth = $auth;
        this.LoginService = LoginService;
        this.inputType = 'password';
    }
    toString(){
        return 'LoginCtrl';
    }
    onSuccess(user){
        this.SessionService.startSession(user).then(()=>{
            this.state.go('/dashboard');
        });
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
}

module.exports = LoginCtrl;
