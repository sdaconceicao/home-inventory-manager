/* global module */
// Vendor Bundle configuration
"use strict";

var VendorConfig = function () {
    var vendorPath = 'vendor/';

    return {
        getVendorJsList: function (dirPath, target) {
            var newDirPath = dirPath || '',
                minVendorList = [
                    newDirPath + vendorPath + 'jquery/dist/jquery.min.js',
                    newDirPath + vendorPath + 'jquery-placeholder/jquery.placeholder.js',
                    newDirPath + vendorPath + 'modernizr/modernizr.js',
                    newDirPath + vendorPath + 'fastclick/lib/fastclick.js',
                    newDirPath + vendorPath + 'angular/angular.min.js',
                    newDirPath + vendorPath + 'angular-animate/angular-animate.min.js',
                    newDirPath + vendorPath + 'angular-ui-router/release/angular-ui-router.min.js',
                    newDirPath + vendorPath + 'angular-bootstrap/ui-bootstrap-tpls.min.js',
                    newDirPath + vendorPath + 'ngstorage/ngStorage.js',
                    newDirPath + vendorPath + 'satellizer/satellizer.min.js',
                    newDirPath + vendorPath + 'lodash/lodash.min.js',
                    newDirPath + vendorPath + 'angular-xeditable/dist/js/xeditable.min.js'
                ],
                devVendorList = [
                    newDirPath + vendorPath + 'jquery/dist/jquery.js',
                    newDirPath + vendorPath + 'jquery-placeholder/jquery.placeholder.js',
                    newDirPath + vendorPath + 'modernizr/modernizr.js',
                    newDirPath + vendorPath + 'fastclick/lib/fastclick.js',
                    newDirPath + vendorPath + 'angular/angular.js',
                    newDirPath + vendorPath + 'angular-animate/angular-animate.js',
                    newDirPath + vendorPath + 'angular-ui-router/release/angular-ui-router.js',
                    newDirPath + vendorPath + 'angular-bootstrap/ui-bootstrap-tpls.js',
                    newDirPath + vendorPath + 'ngstorage/ngStorage.min.js',
                    newDirPath + vendorPath + 'satellizer/satellizer.js',
                    newDirPath + vendorPath + 'lodash/lodash.js',
                    newDirPath + vendorPath + 'angular-xeditable/dist/js/xeditable.min.js'

                ];
            return target && target === 'local' ? minVendorList : devVendorList;
        },

        getVendorStyleList: function (dirPath, target) {
            var newDirPath = dirPath || '',
                minVendorList = [
                    newDirPath + vendorPath + 'normalize-css/normalize.css',
                    newDirPath + vendorPath + 'bootstrap/dist/css/bootstrap.min.css',
                    newDirPath + vendorPath + 'angular-xeditable/dist/css/xeditable.min.css'
                ],
                devVendorList = [
                    newDirPath + vendorPath + 'normalize-css/normalize.css',
                    newDirPath + vendorPath + 'bootstrap/dist/css/bootstrap.css',
                    newDirPath + vendorPath + 'angular-xeditable/dist/css/xeditable.css'
                ];
            return target && target === 'local' ? minVendorList : devVendorList;
        }
    }
};

module.exports = VendorConfig;


