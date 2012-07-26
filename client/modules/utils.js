define([
    'jquery'
    ], function ( $ ){

        var exports = {};

        exports.loadCSS = function (style){
            $('<style />').html(style).appendTo('head');
        }
        return exports;
    });