import './user-menu.directive.less';

import userMenuTemplate from './user-menu.template.html';
import userMenuController from './user-menu.controller';

export default function userMenuDirective() {
  return {
    restrict: 'E',
    template: userMenuTemplate,
    controller: userMenuController,
    controllerAs: 'vm',
  };
}
