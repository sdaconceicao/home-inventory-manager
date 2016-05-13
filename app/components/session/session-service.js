'use strict';

class SessionService{
    constructor(){
        if (!this.getSession()){
            this.resetSession();
        }

    }
    startSession(response){
        this.session.loggedIn = true;
        this.session.sessionId = response.id;
        this.setUser(response.user);
    }
    resetSession(){
        this.session = {
            loggedIn: false,
            sessionId: null
        };
    }
    getSession(){
        return this.session;
    }
    getUser(){
        return this.session.user;
    }
    setUser(user){
        this.session.user = user;
    }
}

module.exports = SessionService;
