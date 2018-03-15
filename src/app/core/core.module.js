import * as angular from 'angular';

import userService from './services/user.service';

import userMenuDirective from './directives/user-menu/user-menu.directive';

export default angular.module('core', [])
  .service('UserService', userService)
  .directive('userMenu', userMenuDirective)
  .name;
