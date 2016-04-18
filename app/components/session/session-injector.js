'use strict';
var SessionInjector = (SessionService)=> {
    return {
        request: function(config) {
            config.headers['x-session-token'] = SessionService.getToken();
            return config;
        },
        responseError: (rejection) =>{
            if (rejection.status !== 401) {
                return rejection;
            }
        }
    };
 };

 module.exports = SessionInjector;
