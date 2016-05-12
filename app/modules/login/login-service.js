/* global module, angular */
'use strict';


class LoginService {
    constructor(RestService, uri){
        this.RestService = RestService;
        this.uri = uri;
    }
    toString(){
        return 'LoginService';
    }
    login(credentials){
        return this.RestService.call(
            {
                method: 'POST',
                url: this.uri.api + '/Users/login',
                data: credentials
            }
        );
    }
}

module.exports = LoginService;
