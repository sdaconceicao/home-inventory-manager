class InventoryService{
    /* @ngInject */
    constructor(HttpService, SessionService){
        this.HttpService = HttpService;
        this.SessionService = SessionService;
    }

    toString(){
        return 'InventoryService';
    }

    get(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `/inventories/${id}`
            }
        );
    }

    getInventoriesForUser(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `/users/${id}/inventories`
            }
        );
    }

    save(data){
        return this.HttpService.call(
            {
                method: data.id ? 'PUT' : 'POST',
                url: `/users/${this.SessionService.getUser().id}/inventories/${data.id ? data.id : ''}`,
                data: data
            }
        );
    }

    delete(data){
        return this.HttpService.call(
            {
                method: 'DELETE',
                url: `/users/${this.SessionService.getUser().id}/inventories/${data.id}`
            }
        );
    }

}

module.exports = InventoryService;
