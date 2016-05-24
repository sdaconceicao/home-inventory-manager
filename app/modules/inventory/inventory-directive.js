'use strict';

class InventoryCtrl{

    /* @ngInject */
    constructor(InventoryService){
        this.InventoryService = InventoryService;
        this.state = this.data.id ? 'view' : 'edit';
    }

    toString(){
        return 'InventoryCtrl';
    }

    edit(){
        this.state = 'edit';
    }

    cancel(){
        this.state = 'view';
    }

    save(){
        this.InventoryService.save(this.data)
            .then((result)=>{
                this.state = 'view';
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            })
            .finally(()=>{

            });
    }
}

const inventory = /* @ngInject */()=>{
    return{
        restrict: 'E',
        templateUrl: 'inventory/inventory.html',
        controller: InventoryCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            data: "=",
            editable: "@"
        }
    }
};

module.exports = inventory;
