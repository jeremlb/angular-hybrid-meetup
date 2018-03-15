import * as angular from 'angular';

import jokesService from './services/jokes.service';
import userService from './services/user.service';

import userMenuDirective from './directives/user-menu/user-menu.directive';

export default angular.module('core', [])
  .service('UserService', userService)
  .service('JokesService', jokesService)
  .directive('userMenu', userMenuDirective)
  .name;
