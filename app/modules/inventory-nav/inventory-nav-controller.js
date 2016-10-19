class InventoryNavCtrl{

    /* @ngInject */
    constructor(inventories, $scope){
        this.inventories = inventories;
        this.$scope = $scope;
        this.init();
    }

    toString(){
        return 'InventoryNavCtrl';
    }

    init(){
        this.$scope.$watch('ctrl.inventories', ()=> {
            this.inventories = _.compact(this.inventories);
        }, true);
    }

    addInventory(){
        this.inventories.push({});
    }

    getState(){
        return !this.inventories || !this.inventories[this.inventories.length-1] || this.inventories[this.inventories.length-1].name ? 'view' : 'add';
    }

}

module.exports = InventoryNavCtrl;
