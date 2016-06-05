'use strict';

class ItemService{

    /* @ngInject */
    constructor(RestService, uri){
        this.RestService = RestService;
        this.uri = uri;
    }

    toString(){
        return 'ItemService';
    }

    getItemsForInventory(id){
        return this.RestService.call(
            {
                method: 'GET',
                url: `${this.uri.api}/inventories/${id}/items`
            }
        );
    }

    save(data){
        return this.RestService.call(
            {
                method: data.id ? 'PUT' : 'POST',
                url: `${this.uri.api}/inventories/${data.inventoryId}/items/${data.id ? data.id : ''}`,
                data: data
            }
        );
    }

    delete(data){
        return this.RestService.call(
            {
                method: 'DELETE',
                url: `${this.uri.api}/inventories/${data.inventoryId}/items/${data.id}`
            }
        );
    }

}

module.exports = ItemService;
