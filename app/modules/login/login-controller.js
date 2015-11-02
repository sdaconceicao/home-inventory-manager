/* global module, angular */
'use strict';

var LoginCtrl = function(){
    var ctrl = this;
    //Variables
    angular.extend(ctrl, {
        user : null
    });
};

module.exports = [LoginCtrl];
