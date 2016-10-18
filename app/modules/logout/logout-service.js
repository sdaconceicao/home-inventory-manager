class LogoutService {
    constructor(HttpService, uri){
        this.HttpService = HttpService;
        this.uri = uri;
    }
    toString(){
        return 'LogoutService';
    }
    logout(){
        return this.HttpService.call(
            {
                method: 'POST',
                url: `${this.uri.api}/users/logout`
            }
        );
    }
}

module.exports = LogoutService;
