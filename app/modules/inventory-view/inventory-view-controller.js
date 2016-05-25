'use strict';

class InventoryViewCtrl{

    /* @ngInject */
    constructor(InventoryService, ItemService, $stateParams){
        this.InventoryService = InventoryService;
        this.ItemService = ItemService;
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
                this.ItemService.getItemsForInventory(this.$stateParams.id).then((response)=>{
                    this.items = response;
                    if (!this.items){
                        this.items = [];
                    }
                });

            })
    }

    addItem(){
        this.items.push({inventoryId: this.$stateParams.id});
    }


}

module.exports = InventoryViewCtrl;
