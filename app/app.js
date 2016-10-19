/* global module, require */
'use strict';

let oath = require('./config/oath'),
    uri = require('./config/uri'),
    templates = require('../dist/templates'),
    components = require('./components/components'),
    home = require('./modules/home/home'),
    login = require('./modules/login/login'),
    logout = require('./modules/logout/logout'),
    dashboard = require('./modules/dashboard/dashboard'),
    inventory = require('./modules/inventory/inventory'),
    item = require('./modules/item/item'),
    inventoryView = require('./modules/inventory-view/inventory-view'),
    category = require('./modules/category/category'),
    inventoryNav = require('./modules/inventory-nav/inventory-nav'),
    dependencies = ['ngAnimate', 'ui.router', 'ui.bootstrap', 'satellizer', 'ngStorage', 'xeditable',
        'him.templates',
        components.name, home.name, login.name, logout.name, dashboard.name, inventory.name, item.name,
        inventoryView.name, category.name, inventoryNav.name
    ]
;

angular.module('him', dependencies)
    .constant('oath', oath)
    .constant('uri', uri)
    .config(/* @ngInject */($locationProvider, $urlRouterProvider, $compileProvider, $authProvider, $stateProvider, $httpProvider,
                            oath)=>{
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $urlRouterProvider.otherwise('/home');
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $authProvider.facebook({
            clientId: oath.facebookId,
            responseType: 'token'
        });
        $stateProvider.state('app', {
            abstract: true,
            data: {
                requireLogin: true
            },
            views: {
                'inventoryNav@': {
                    template: require('./modules/inventory-nav/inventory-nav.html'),
                    controller: 'InventoryNavCtrl as ctrl',
                    resolve: {
                        /* @ngInject */
                        inventories(InventoryService, SessionService) {
                            return InventoryService.getInventoriesForUser(SessionService.getUser().id);
                        }
                    }
                }
            }
        });
        $httpProvider.interceptors.push('SessionInjector');
    })
    .run(/* @ngInject */ ($templateCache, $rootScope, $state, $uibModal,
                          SessionService, editableOptions,
                          loginConfig, HttpService, uri)=>{
        $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
            let requireLogin = toState.data.requireLogin;

            if (requireLogin && !SessionService.getSession().loggedIn) {
                event.preventDefault();
                $state.go('home');
                $uibModal.open(loginConfig);
            }
        });
        HttpService.configure(uri);
        editableOptions.theme = 'bs3';

    })
;
