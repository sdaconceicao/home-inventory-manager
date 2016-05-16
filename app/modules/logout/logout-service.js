/* global module, angular */
'use strict';


class LogoutService {
    constructor(RestService, SessionService, uri){
        this.RestService = RestService;
        this.SessionService = SessionService;
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
