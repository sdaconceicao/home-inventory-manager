/* global module, angular */
'use strict';

class RegisterCtrl {
    /* @ngInject */
    constructor($state){
        this.state = $state;
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
    signUp (){

    }
    passwordToggle(){

    }
}

module.exports = RegisterCtrl;
