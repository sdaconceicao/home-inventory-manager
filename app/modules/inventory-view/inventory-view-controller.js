'use strict';

class InventoryViewCtrl{

    /* @ngInject */
    constructor(InventoryService, $stateParams){
        this.InventoryService = InventoryService;
        this.$stateParams = $stateParams;
        this.init();
    }

    toString(){
        return 'InventoryViewCtrl';
    }

    init(){
        this.InventoryService.get(this.$stateParams.id)
            .then((response)=>{
                console.log(this.toString() + " | init SUCCESS", response);
                this.inventory = response;
            })
    }

    addItem(){
        this.inventory.items.push({state: 'edit'});
    }


}

module.exports = InventoryViewCtrl;
