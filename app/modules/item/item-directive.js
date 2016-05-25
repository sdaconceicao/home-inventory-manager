'use strict';

class ItemCtrl{

    /* @ngInject */
    constructor(ItemService){
        this.ItemService = ItemService;
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
}

const item = /* @ngInject */()=>{
    return{
        restrict: 'E',
        templateUrl: 'item/item.html',
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
