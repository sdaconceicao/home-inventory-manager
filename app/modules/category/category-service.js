'use strict';

class CategoryService{
    constructor(RestService, uri){
        this.RestService = RestService;
        this.uri = uri;
    }

    toString(){
        return 'CategoryService';
    }

    getCategoriesForUser(id){
        return this.RestService.call(
            {
                method: 'GET',
                url: `${this.uri.api}/users/${id}/categories`
            }
        );
    }


}

module.exports = CategoryService;
