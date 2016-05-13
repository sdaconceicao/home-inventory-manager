'use strict';

class SessionService{
    constructor($sessionStorage){
        this.$sessionStorage = $sessionStorage;
        if (!this.getSession()){
            this.resetSession();
        }
    }

    toString(){
        return 'SessionService';
    }

    startSession(response){
        this.$sessionStorage.session.loggedIn = true;
        this.$sessionStorage.session.sessionId = response.id;
        this.setUser(response.user);
    }

    resetSession(){
        this.$sessionStorage.session = {
            loggedIn: false,
            sessionId: null
        };
    }

    getSession(){
        console.log(this.toString() + ' getSession()', this.$sessionStorage.session);
        return this.$sessionStorage.session;
    }

    getUser(){
        console.log(this.toString() + ' getUser()', this.$sessionStorage.session.user);
        return this.$sessionStorage.session.user;
    }

    setUser(user){
        this.$sessionStorage.session.user = user;
    }
}

module.exports = SessionService;
