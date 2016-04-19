'use strict';

class SessionService{
    constructor(){
        if (!this.getSession()){
            this.resetSession();
        }

    }
    startSession(user){
        this.session.loggedIn = true;
        this.session.sessionId = result.sessionId;
        this.session.user = user;
    }
    resetSession(){
        this.session = {
            loggedIn: false,
            sessionId: null,
        };
    }
    getSession(){
        return this.session;
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

module.exports = SessionService;
