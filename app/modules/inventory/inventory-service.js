'use strict';

class InventoryService{
    constructor(RestService, SessionService, uri){
        this.RestService = RestService;
        this.SessionService = SessionService;
        this.uri = uri;
    }

    toString(){
        return 'InventoryService';
    }

    get(id){
        return this.RestService.call(
            {
                method: 'GET',
                url: this.uri.api + `/inventories?id=${id}`
            }
        );
    }

    getInventoriesForUser(id){
        return this.RestService.call(
            {
                method: 'GET',
                url: this.uri.api + `/users/${this.SessionService.getUser().id}/inventories`
            }
        )
    }

    add(data){
        return this.RestService.call(
            {
                method: 'POST',
                url: this.uri.api + `/users/${this.SessionService.getUser().id}/inventories`,
                data: data
            }
        );
    }


}

module.exports = InventoryService;
