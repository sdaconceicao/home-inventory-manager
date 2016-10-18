'use strict';

class CategoryService{
    constructor(HttpService){
        this.HttpService = HttpService;
    }

    toString(){
        return 'CategoryService';
    }

    getCategoriesForUser(id){
        return this.HttpService.call(
            {
                method: 'GET',
                url: `/users/${id}/categories`
            }
        );
    }


}

module.exports = CategoryService;
