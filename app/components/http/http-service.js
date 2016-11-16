class HttpService{
    /* @ngInject */
    constructor($http, $q){
        this.http = $http;
        this.q = $q;
    }

    configure(base){
        this.base = base.api;
    }

    call(config){
        let deferred = this.q.defer();
        config.url = this.base + config.url;

        this.http(config)
            .then( (response)=> {
                this.successHandler(deferred, config, response)
            })
            .catch( (response)=> {
                this.errorHandler(deferred, config, response)
            });

        return deferred.promise;
    }
    successHandler(deferred, config, response){
        if (response.status >= 205){
            this.errorHandler(deferred, config);
        }
        deferred.resolve(response.data);
    }
    errorHandler(deferred, config, response){
        deferred.reject(response);
    }
}

module.exports = angular.module('him.components.http', [])
    .service('HttpService', HttpService)
;
