/* global module, angular */
'use strict';


class RegisterService {
    constructor(RestService, uri){
        this.RestService = RestService;
        this.uri = uri;
    }
    toString(){
        return 'RegisterService';
    }
    register(params){
        return this.RestService.call(
            {
                method: 'POST',
                url: this.uri.api + '/users',
                params: params
            }
        );
    }
}

module.exports = LogoutService;
