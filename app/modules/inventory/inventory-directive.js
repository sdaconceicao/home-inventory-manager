'use strict';

class InventoryCtrl{

    /* @ngInject */
    constructor(InventoryService){
        this.InventoryService = InventoryService;
        this.shown = this.data.id ? false : true;
    }

    toString(){
        return 'InventoryCtrl';
    }

    edit(){
        this.form.$show();
    }

    cancel(){
        this.form.$hide();
    }

    save(){
        this.InventoryService.save(this.data)
            .then((result)=>{
                this.form.$hide();
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            })
            .finally(()=>{

            });
    }
}

const inventory = /* @ngInject */()=>{
    return{
        restrict: 'E',
        templateUrl: 'inventory/inventory.html',
        controller: InventoryCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {
            data: "=",
            editable: "@"
        },
        link: function(scope, el, attr, ctrl) {
            ctrl.form = scope.editableForm;
        }
    }
};

module.exports = inventory;
