class ModalConfirmCtrl{

    /* @ngInject */
    constructor($uibModalInstance, message){
        this.$uibModalInstance = $uibModalInstance;
        this.message = message;
    }

    toString(){
        return 'ModalConfirmCtrl';
    }

    accept(){
        this.$uibModalInstance.close(true);
    }

    reject(){
        this.$uibModalInstance.close(false);
    }

}

module.exports = ModalConfirmCtrl;
