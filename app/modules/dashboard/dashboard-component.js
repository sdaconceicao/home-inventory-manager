class DashboardCtrl{

    /* @ngInject */
    constructor(){

    }

    toString(){
        return 'DashboardCtrl';
    }
    
}

const dashboardComponentConfig = {
    controller: DashboardCtrl,
    template: require('./dashboard.html')
};

module.exports = dashboardComponentConfig;
