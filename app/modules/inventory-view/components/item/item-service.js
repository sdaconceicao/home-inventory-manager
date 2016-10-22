class ItemService{

    /* @ngInject */
    constructor(HttpService){
        this.HttpService = HttpService;
    }

    toString(){
        return 'ItemService';
    }

    getItemsForInventory(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `/inventories/${id}/items`
            }
        );
    }

    save(data){
        return this.HttpService.call(
            {
                method: data.id ? 'PUT' : 'POST',
                url: `/inventories/${data.inventoryId}/items/${data.id ? data.id : ''}`,
                data: data
            }
        );
    }

    delete(data){
        return this.HttpService.call(
            {
                method: 'DELETE',
                url: `/inventories/${data.inventoryId}/items/${data.id}`
            }
        );
    }

}

module.exports = ItemService;
