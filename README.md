Sample Context Bar SPA
======================

Single Page Application (SPA) with a single context bar and multiple components using Angular 2.

This SPA is packaged using Webpack and during development mode it needs to run a NodeJS server to allow Webpack
to _transpile_ and package all files dynamically.

This is a TypeScript/JavaScript project and its NPM root will be the directory were you cloned the repo and
where this README file is located. All `npm`/`yarn` commands are expected to be used at this _root_ directory.

## Setting up your environment

* If you don't have it, install or update NodeJS 6.0 or newer
* Install Typings (npm -g install typings)
* Install Yarn (npm -g install yarn) (this is optional, you can run it with npm only)
* Clone this repository
* Run `yarn` or alternatively `npm install`. This will install all NPM and Typings dependencies. 

## Starting a development server

Run `yarn start` or `npm start` to run the development servers: A redirect proxy and the Webpack dev server.

The application will be available on your browser at [localhost:3000](http://localhost:3000).

## How does it work

This is using angular router and several regular angular2 components.  