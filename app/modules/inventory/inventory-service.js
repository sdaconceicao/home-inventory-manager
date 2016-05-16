'use strict';

class InventoryService{
    constructor(RestService, uri){
        this.RestService = RestService;
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

    add(data){
        return this.RestService.call(
            {
                method: 'POST',
                url: this.uri.api + '/inventories',
                data: data
            }
        );
    }
}

module.exports = InventoryService;
