'use strict';

class InventoryCtrl{
    constructor(){

    }

    toString(){
        return 'InventoryCtrl';
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
            inventory: "="
        }
    }
};

module.exports = inventory;
