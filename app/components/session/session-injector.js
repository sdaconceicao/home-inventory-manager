'use strict';
var SessionInjector = (SessionService)=> {
    return {
        request: function(config) {
            config.headers['ACCESS_TOKEN'] = SessionService.getSession().id;
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
