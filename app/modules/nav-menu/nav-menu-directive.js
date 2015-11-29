/* $, global angular, module, require */
'use strict';

function navMenu($window){
    return {
        templateUrl: 'nav-menu/nav-menu.html',
        restrict: 'E',
        replace: true

    };
}

module.exports = angular.module('pub.navMenu', [])
    .directive('navMenu', navMenu)
;;
