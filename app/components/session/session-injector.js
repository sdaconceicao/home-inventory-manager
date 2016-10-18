var SessionInjector = (SessionService)=> {
    return {
        request: function(config) {
            config.headers['X-Access-Token'] = SessionService.getSession().sessionId;
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
