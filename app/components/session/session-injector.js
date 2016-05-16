'use strict';
var SessionInjector = (SessionService)=> {
    return {
        request: function(config) {
            console.log('config', config);
            config.headers['X-Access-Token'] = SessionService.getSession().sessionId;
            console.log('config after', config);
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
