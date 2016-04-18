'use strict';

class SessionService{
    constructor(){

    }
    getToken(){
        return this.token;
    }
    setToken(token){
        this.token = token;
    }
    getUser(){
        return this.user;
    }
    setUser(user){
        this.user = user;
    }
}
