import './styles/layout.less';

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';

import App from './app';

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [App], {strictDi: true});
});
