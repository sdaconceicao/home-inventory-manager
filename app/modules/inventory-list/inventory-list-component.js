class InventoryListCtrl{

    /* @ngInject */
    constructor($scope){
        this.$scope = $scope;
    }

    toString(){
        return 'InventoryListCtrl';
    }

    $onInit(){
        this.$scope.$watch('$ctrl.inventories', ()=> {
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

const InventoryListComponentConfig = {
    controller: InventoryListCtrl,
    template: require('./inventory-list.html'),
    bindings: {
        inventories: "<"
    }
};

module.exports = InventoryListComponentConfig;
