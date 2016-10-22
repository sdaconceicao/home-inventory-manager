'use strict';

class InventoryCtrl{

    /* @ngInject */
    constructor(InventoryService, EventMediator, $uibModal, modalConfirmConfig, $scope){
        this.InventoryService = InventoryService;
        this.EventMediator = EventMediator;
        this.$uibModal = $uibModal;
        this.modalConfirmConfig = modalConfirmConfig;
        this.shown = this.data.id ? false : true;
    }

    toString(){
        return 'InventoryCtrl';
    }

    edit(){
        this.form.$show();
    }

    cancel(){
        if (this.data.id){
            this.form.$hide();
        } else {
            this.data = null;
            this.el.remove();
        }
    }

    save(){
        this.InventoryService.save(this.data)
            .then((result)=>{
                this.data = result;
                this.form.$hide();
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            });
    }

    deleteConfirm(){
        this.modalConfirmConfig.resolve = {
            message: ()=> {
                return "Are you sure you want to delete this inventory?";
            }
        };
        let modal = this.$uibModal.open(this.modalConfirmConfig);
        modal.result.then((result)=>{
            if (result){
                this.delete();
            }

        })

    }

    delete(){
        this.InventoryService.delete(this.data)
            .then((result)=>{
                this.data = null;
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            });
    }
}

const inventory = /* @ngInject */()=>{
    return{
        restrict: 'E',
        template: require('./inventory.html'),
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
