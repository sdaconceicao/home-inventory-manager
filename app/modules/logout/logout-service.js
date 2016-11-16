class LogoutService {
    constructor(HttpService){
        this.HttpService = HttpService;
    }
    toString(){
        return 'LogoutService';
    }
    logout(){
        return this.HttpService.call(
            {
                method: 'POST',
                url: `users/logout`
            }
        );
    }
}

module.exports = LogoutService;
