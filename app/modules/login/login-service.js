/* global module, angular */
'use strict';


class LoginService {
    constructor(RestService){
        this.RestService = RestService;
    }
    toString(){
        return 'LoginService';
    }
    login(credentials){
        return this.RestService.call(
            {
                url: '/login',
                params: credentials
            }
        );
    }
}

module.exports = LoginService;
