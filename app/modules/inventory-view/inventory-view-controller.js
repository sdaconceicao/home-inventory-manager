
class InventoryViewCtrl{

    /* @ngInject */
    constructor(InventoryService, ItemService, $stateParams, $scope){
        this.InventoryService = InventoryService;
        this.ItemService = ItemService;
        this.$stateParams = $stateParams;
        this.$scope = $scope;
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
                    this.$scope.$watch('ctrl.items', ()=> {
                        this.items = _.compact(this.items);
                    }, true);
                });

            })
    }

    addItem(){
        this.items.push({inventoryId: this.$stateParams.id});
    }


}

module.exports = InventoryViewCtrl;
