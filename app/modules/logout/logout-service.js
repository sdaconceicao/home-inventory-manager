/* global module, angular */
'use strict';


class LogoutService {
    constructor(RestService, uri){
        this.RestService = RestService;
        this.uri = uri;
    }
    toString(){
        return 'LogoutService';
    }
    logout(){
        return this.RestService.call(
            {
                method: 'POST',
                url: this.uri.api + '/users/logout'
            }
        );
    }
}

module.exports = LogoutService;
