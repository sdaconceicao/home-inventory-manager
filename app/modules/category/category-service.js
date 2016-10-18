'use strict';

class CategoryService{
    constructor(HttpService, uri){
        this.HttpService = HttpService;
        this.uri = uri;
    }

    toString(){
        return 'CategoryService';
    }

    getCategoriesForUser(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `${this.uri.api}/users/${id}/categories`
            }
        );
    }


}

module.exports = CategoryService;
