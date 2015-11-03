/* global module, angular */
'use strict';


class LoginCtrl {
    constructor(){

    }
    toString(){
        return 'LoginCtrl';
    }
    onSuccess(result){

    }
    onError(result){
        this.error = result;
    }
}

module.exports = LoginCtrl;
