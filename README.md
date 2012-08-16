#A web-app boilerplate

A set of best practices and utilities for building a widget based application.

* RequireJS : <http://requirejs.org/>
* RequireJS Plugins : text, domReady
* Underscore : <http://underscorejs.org/>
* jQuery : <http://jquery.com>
* Bootstrap CSS : <http://twitter.github.com/bootstrap/>
* QUnit : <http://qunitjs.com/>
* PhantomJS : <http://phantomjs.org/>

## Installation
Clone the git repo to your disk with

	$ git clone https://github.com/focusmatic/webapp-boilerplate.git

To install the node modules, from the root folder

	$ npm install 

every node's dependencies will be download and install.

## Conventions

### Modules usage

Some good practices to define modules and use them :

* define a path alias to the module on the `common.js`
* call modules like `path-to-my-module/entry-point-of-my-module.js`
* use relative path to define dependencies between files

## Front-End Testing

First of all, be sure you have phantomJS installed and added his path to `$PATH`. Then put all your tests into client/test and just run

	$ ./runtests

This script generates a `main_test.js` by listing all `test-*.js` files into `client/test`.
You can also find the QUnit report at the url <http://localhost:8888/test>.