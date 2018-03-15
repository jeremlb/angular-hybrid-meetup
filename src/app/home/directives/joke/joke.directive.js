import './joke.directive.less';

import jokeTemplate from './joke.template.html';

export default function jokeDirective() {
  return {
    restrict: 'E',
    template: jokeTemplate,
    scope: {
      'joke': "=item",
    },
    link: (scope, elem, attrs) => {
    },
  };
}
