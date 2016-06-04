'use strict';

class DashboardCtrl{
    constructor(InventoryService, SessionService, EventMediator){
        this.InventoryService = InventoryService;
        this.SessionService = SessionService;
        this.EventMediator = EventMediator;
        this.init();
    }

    toString(){
        return 'DashboardCtrl';
    }

    init(){
        this.InventoryService.getInventoriesForUser()
            .then((response)=>{
                console.log(this.toString() + " | init SUCCESS", response);
                this.inventories = response;
            });
    }

    addInventory(){
        this.inventories.push({});
    }

    getState(){
        return !this.inventories || this.inventories[this.inventories.length-1].name ? 'view' : 'add';
    }

}

module.exports = DashboardCtrl;
