// Filename: /modules/sharedMain/modelEmpty.js
define([
	'jquery',
	'underscore',
	'backbone'
	],function($, _, Backbone)
	{
		var model = Backbone.Model.extend({});

		return model;
	});