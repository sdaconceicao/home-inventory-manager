/* global module, angular */
'use strict';


class LoginService {
    constructor(HttpService, uri){
        this.HttpService = HttpService;
        this.uri = uri;
    }
    toString(){
        return 'LoginService';
    }
    login(credentials){
        return this.HttpService.call(
            {
                method: 'POST',
                url:  `${this.uri.api}/users/login?include=user`,
                data: credentials
            }
        );
    }
    register(params){
        return this.HttpService.call(
            {
                method: 'POST',
                url: `${this.uri.api}/users`,
                data: params
            }
        );
    }
}

module.exports = LoginService;
