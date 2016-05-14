/* global module, angular */
'use strict';

class RegisterCtrl {
    /* @ngInject */
    constructor($state, RegisterService){
        this.state = $state;
        this.RegisterService = RegisterService;
        this.inputType = 'password';
    }
    toString(){
        return 'RegisterCtrl';
    }
    onSuccess(result){
        this.state.go('/dashboard')
    }
    onError(result){
        this.error = result;
    }
    register (){
        this.RegisterService.register(this.user)
    }
    passwordToggle(){

    }
}

module.exports = RegisterCtrl;
