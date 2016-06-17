'use strict';

class DashboardCtrl{
    constructor(InventoryService, SessionService, $scope){
        this.InventoryService = InventoryService;
        this.SessionService = SessionService;
        this.$scope = $scope;
        this.init();
    }

    toString(){
        return 'DashboardCtrl';
    }

    init(){
        this.InventoryService.getInventoriesForUser(this.SessionService.getUser().id)
            .then((response)=>{
                console.log(this.toString() + " | init SUCCESS", response);
                this.inventories = response;
                this.$scope.$watch('ctrl.inventories', ()=> {
                    this.inventories = _.compact(this.inventories);
                }, true);
            });

    }

    addInventory(){
        this.inventories.push({});
    }

    getState(){
        return !this.inventories || !this.inventories[this.inventories.length-1] || this.inventories[this.inventories.length-1].name ? 'view' : 'add';
    }

}

module.exports = DashboardCtrl;
