'use strict';

class CategoryCtrl{

    /* @ngInject */
    constructor(CategoryService){
        this.CategoryService = CategoryService;
    }

    toString(){
        return 'CategoryCtrl';
    }


}

const inventory = /* @ngInject */()=>{
    return{
        restrict: 'E',
        template: require('./category.html'),
        controller: CategoryCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            data: "="
        }
    }
};

module.exports = inventory;
