'use strict';

class DashboardCtrl{
    constructor(InventoryService, SessionService){
        this.InventoryService = InventoryService;
        this.SessionService = SessionService;
        this.init();
    }

    toString(){
        return 'DashboardCtrl';
    }

    init(){
        this.InventoryService.getInventoriesForUser(this.SessionService.getSession().sessionId)
            .then((response)=>{
                console.log(this.toString() + " | init SUCCESS", response);
                this.inventories = response;
            })
    }

    addInventory(){

    }
}

module.exports = DashboardCtrl;
