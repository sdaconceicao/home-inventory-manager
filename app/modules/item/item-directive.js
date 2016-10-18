class ItemCtrl{

    /* @ngInject */
    constructor(ItemService, modalConfirmConfig, $uibModal){
        this.ItemService = ItemService;
        this.modalConfirmConfig = modalConfirmConfig;
        this.$uibModal = $uibModal;
        this.shown = this.data.id ? false : true;
    }

    toString(){
        return 'ItemCtrl';
    }

    edit(){
        this.form.$show();
    }

    cancel(){
        this.form.$hide();
    }

    save(){
        this.ItemService.save(this.data)
            .then((result)=>{
                this.form.$hide();
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            })
            .finally(()=>{

            });
    }

    deleteConfirm(){
        this.modalConfirmConfig.resolve = {
            message: ()=> {
                return "Are you sure you want to delete this item?";
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
        this.ItemService.delete(this.data)
            .then((result)=>{
                this.data = null;
            })
            .catch((error)=>{
                console.error(this.toString() + ' save() ERROR', error);
            });
    }

}

const item = /* @ngInject */()=>{
    return{
        restrict: 'E',
        template: require('./item.html'),
        controller: ItemCtrl,
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

module.exports = item;
