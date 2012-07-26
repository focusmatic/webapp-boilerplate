#A web-app boilerplate

A set of best practices and utilities for building a widget based application.

* RequireJS : http://requirejs.org/
* RequireJS Plugins : cs, text, order, domReady, i18n,
* Underscore : http://underscorejs.org/
* jQuery : http://jquery.com
* Bootstrap CSS : http://twitter.github.com/bootstrap/

## Installation

$ npm install from the root folder

every node's dependencies will be download and install.

## Conventions

A set of rules based on best pratices.

/TODO

### File-Naming

/TODO

### Modules usage

Some good practices to define modules and use them :

* define a path alias to the module on the main.js
* call modules like 'path-to-my-module/entry-point-of-my-module.js'
* use relative path to define dependencies between files

## Content Listing

|── client  
|   |── ext  
|   |   |── backbone  
|   |   |── bootstrap  
|   |   |   |── css  
|   |   |   |── img  
|   |   |   |── js  
|   |   |   |── plugins  
|   |   |── jquery  
|   |   |── require  
|   |   |   |── plugins  
|   |   |── underscore  
|   |── modules  
|       |── toolboxUI  
|           |── content  
|           |── menu  
|           |── navbar  
|── server  
|── shared  