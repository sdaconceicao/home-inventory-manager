/* global module, angular */
'use strict';


class LoginService {
    constructor(HttpService){
        this.HttpService = HttpService;
    }
    toString(){
        return 'LoginService';
    }
    login(credentials){
        return this.HttpService.call(
            {
                method: 'POST',
                url:  `/users/login?include=user`,
                data: credentials
            }
        );
    }
    register(params){
        return this.HttpService.call(
            {
                method: 'POST',
                url: `/users`,
                data: params
            }
        );
    }
}

module.exports = LoginService;
