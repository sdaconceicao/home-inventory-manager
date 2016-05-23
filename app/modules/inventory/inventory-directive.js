'use strict';

class InventoryCtrl{
    constructor(InventoryService){
        this.InventoryService = InventoryService;
    }

    toString(){
        return 'InventoryCtrl';
    }

    edit(){
        this.inventory.state = 'edit';
    }

    cancel(){
        this.inventory.state = 'view';
    }

    save(){
        this.InventoryService.save(this.inventory)
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

const inventory = ()=>{
    return{
        restrict: 'E',
        templateUrl: 'inventory/inventory.html',
        controller: InventoryCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            inventory: "=",
            editable: "@"
        }
    }
};

module.exports = inventory;
