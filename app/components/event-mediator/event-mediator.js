class EventMediator{

    constructor($rootScope){
        this.$rootScope = $rootScope;
        this.subscribers = {};
    }

    toString(){
        return 'EventMediator';
    }

    register(eventName, eventFunction) {
        return this.$rootScope.$on(eventName, eventFunction);
    }

    addSubscription (scope, eventName, eventFunction) {
        let deregistration = this.register(eventName, eventFunction);
        let eventInfo = {
            deregistration: deregistration,
            eventName: eventName,
            isLive: true
        };
        this.subscribers[scope.$id].push(eventInfo);
    };

    removeEvent (eventObj) {
        eventObj.deregistration();
        eventObj.isLive = false;
    }

    unsubscribeEvent (scope, eventName) {
        let containerEvents = this.subscribers[scope.$id];
        for (let i = 0; i < containerEvents.length; i++) {
            if (eventName === containerEvents[i].eventName) {
                this.removeEvent(containerEvents[i]);
            }
        }
    };

    unsubscribeAllEvents (scope) {
        let containerEvents = this.subscribers[scope.$id];
        for (let i = 0; i < containerEvents.length; i++) {
            this.removeEvent(containerEvents[i]);
        }
    }

    subscribe (scope, eventName, eventFunction) {
        console.log(this.toString() + '.subscribe()', scope.$id, eventName);
        if (eventName === '$destroy') {
            return this.onDestroy(scope, eventFunction);
        }

        if (!this.subscribers.hasOwnProperty(scope.$id)) {
            this.subscribers[scope.$id] = [];
            this.addDestroyer(scope);
        }
        this.addSubscription(scope, eventName, eventFunction);
    }

    subscribes (scope, eventNames, eventFunction) {
        console.log(this.toString() + '.subscribes()', scope.$id, eventNames);
        angular.forEach(eventNames, (eventName) => {
            this.subscribe(scope, eventName, eventFunction);
        });
    }

    emit (eventName, args) {
        console.log(this.toString() + '.emit()', eventName, args);
        this.$rootScope.$emit(eventName, args);
    }

    unsubscribe (scope, eventName) {
        console.log(this.toString() + '.unsubscribe()', scope.$id, eventName);
        if (this.subscribers.hasOwnProperty(scope.$id)) {
            this.unsubscribeEvent(scope, eventName);
        }
        this.removeNullEvents(scope);
    }

    unsubscribeAllForScope (scope) {
        console.log(this.toString() + '.unsubscribeAllForScope()', scope.$id);
        if (!this.subscribers.hasOwnProperty(scope.$id)) {
            return;
        }
        this.unsubscribeAllEvents(scope);
        this.removeNullEvents(scope);
    }

    onDestroy (scope, destroyFn) {
        console.log(this.toString() + '.onDestroy()', scope.$id);
        scope.$on('$destroy', destroyFn);
    }

    scopeDestroy (destroyedScope) {
        this.unsubscribeAllForScope(destroyedScope.currentScope);
    }

    addDestroyer (scope) {
        console.log(this.toString() + '.addDestroyer()', scope.$id);
        scope.$on('$destroy', angular.bind(this, this.scopeDestroy));
    }

    removeNullEvents (scope) {
        console.log(this.toString() + '.removeNullEvents()', scope.$id);
        if (this.subscribers.hasOwnProperty(scope.$id)) {
            this.subscribers[scope.$id] = this.subscribers[scope.$id].filter(function (eventObj) {
                return eventObj.isLive;
            });
        }
    }

    getEventDeregistrator (scope, eventName) {
        console.log(this.toString() + '.getEventDeregistrator()', scope.$id, eventName);
        return this.subscribers[scope.$id].filter(function (eventObj) {
            return eventObj.eventName === eventName;
        })[0].deregistration;
    }

}

module.exports = EventMediator;
