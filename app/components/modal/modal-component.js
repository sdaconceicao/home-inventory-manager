class ModalCtrl{

    /* @ngInject */
    constructor(){
        this.enableClose = this.enableClose ? this.enableClose : true;
    }

    close(){
        this.instance.dismiss('cancel');
    }
}

const modalComponentConfig = /* @ngInject */ {
    template: require('./modal.html'),
    replace: true,
    transclude: true,
    controller: ModalCtrl,
    bindings: {
        instance: '=',
        enableClose: '=?'
    }
};

module.exports = angular.module('him.modal', [])
    .component('modal', modalComponentConfig)
;

