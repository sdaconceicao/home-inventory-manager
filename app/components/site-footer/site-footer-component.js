class SiteFooterCtrl{

    /* @ngInject */
    constructor(){

    }

    toString(){
        return 'SiteFooterCtrl';
    }

    $onInit(){
        this.copyrightYear = new Date().getFullYear();
    }

}

const siteFooterComponentConfig = {
    controller: SiteFooterCtrl,
    template: require('./site-footer.html')
};

module.exports = angular.module('him.siteFooter', [])
    .component('siteFooter', siteFooterComponentConfig)
;
