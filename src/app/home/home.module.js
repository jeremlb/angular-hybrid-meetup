import * as angular from 'angular';

import homeController from './home.controller';
import homeTemplate from './home.template.html';

import jokeDirective from './directives/joke/joke.directive';

export default angular.module('home', ['ui.router', 'ngSanitize'])
  .config(config)
  .directive('joke', jokeDirective)
  .name;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    template: homeTemplate,
    controller: homeController,
    controllerAs: 'vm',
    resolve: {
      jokes: ['JokesService', function(JokesService) {
        return JokesService.getAll();
      }],
    },
  });
}
