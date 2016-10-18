class ItemService{

    /* @ngInject */
    constructor(HttpService, uri){
        this.HttpService = HttpService;
        this.uri = uri;
    }

    toString(){
        return 'ItemService';
    }

    getItemsForInventory(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `${this.uri.api}/inventories/${id}/items`
            }
        );
    }

    save(data){
        return this.HttpService.call(
            {
                method: data.id ? 'PUT' : 'POST',
                url: `${this.uri.api}/inventories/${data.inventoryId}/items/${data.id ? data.id : ''}`,
                data: data
            }
        );
    }

    delete(data){
        return this.HttpService.call(
            {
                method: 'DELETE',
                url: `${this.uri.api}/inventories/${data.inventoryId}/items/${data.id}`
            }
        );
    }

}

module.exports = ItemService;
