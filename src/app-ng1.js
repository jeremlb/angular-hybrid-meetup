import * as angular from 'angular';

import HomeModule from './app/home/home.module';
import CoreModule from './app/core/core.module.js';

export default angular.module('App', [
  'ui.router',
  'ui.router.upgrade',
  HomeModule,
  CoreModule,
])
  .config(config)
  .name;

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
