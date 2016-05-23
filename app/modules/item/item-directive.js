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
        this.inventory.state = 'edit';
    }

    cancel(){
        this.inventory.state = 'view';
    }

    save(){
        this.ItemService.save(this.inventory)
            .then((result)=>{
                this.inventory.state = 'view';
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
            item: "=",
            editable: "@"
        }
    }
};

module.exports = item;
