'use strict';

class ItemCtrl{

    /* @ngInject */
    constructor(ItemService){
        this.ItemService = ItemService;
    }

    toString(){
        return 'ItemCtrl';
    }

    edit(){
        this.data.state = 'edit';
    }

    cancel(){
        this.data.state = 'view';
    }

    save(){
        this.ItemService.save(this.data)
            .then((result)=>{
                this.data.state = 'view';
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            })
            .finally(()=>{

            });
    }
}

const item = /* @ngInject */()=>{
    return{
        restrict: 'E',
        templateUrl: 'item/item.html',
        controller: ItemCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            data: "=",
            editable: "@"
        }
    }
};

module.exports = item;
