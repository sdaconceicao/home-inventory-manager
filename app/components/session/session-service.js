class SessionService{
    constructor($sessionStorage, EventMediator){
        this.$sessionStorage = $sessionStorage;
        this.EventMediator = EventMediator;
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
        this.EventMediator.emit('session-updated', this.$sessionStorage.session );
    }

    resetSession(){
        this.$sessionStorage.session = {
            loggedIn: false,
            sessionId: null
        };
        this.EventMediator.emit('session-updated', this.$sessionStorage.session );
    }

    getSession(){
        //console.log(this.toString() + ' getSession()', this.$sessionStorage.session);
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
