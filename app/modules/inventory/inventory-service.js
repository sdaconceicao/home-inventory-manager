class InventoryService{
    /* @ngInject */
    constructor(HttpService, SessionService, uri){
        this.HttpService = HttpService;
        this.SessionService = SessionService;
        this.uri = uri;
    }

    toString(){
        return 'InventoryService';
    }

    get(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: this.uri.api + `/inventories/${id}`
            }
        );
    }

    getInventoriesForUser(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `${this.uri.api}/users/${id}/inventories`
            }
        );
    }

    save(data){
        return this.HttpService.call(
            {
                method: data.id ? 'PUT' : 'POST',
                url: `${this.uri.api}/users/${this.SessionService.getUser().id}/inventories/${data.id ? data.id : ''}`,
                data: data
            }
        );
    }

    delete(data){
        return this.HttpService.call(
            {
                method: 'DELETE',
                url: `${this.uri.api}/users/${this.SessionService.getUser().id}/inventories/${data.id}`
            }
        );
    }

}

module.exports = InventoryService;
