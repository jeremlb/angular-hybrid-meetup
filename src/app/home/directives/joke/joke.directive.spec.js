describe('Unit testing great quotes', function() {
  let element;
  let $compile;
  let $scope;
  let $rootScope;

  const joke = {
    id: 1,
    username: 'toto',
    title: 'the joke',
    joke: 'hello',
    anwser: 'world',
    category: 'blabla',
    avatar: 'avatar.png',
  };

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    $scope = $rootScope.$new();
    $scope.joke = joke;
  }));

  it('the joke title should be equal to "the joke"', function() {
    const element = $compile('<joke item="joke"></joke>')($scope);
    const titleElement = element[0].querySelectorAll('.joke-title')[0];
    $scope.$digest();

    expect(titleElement.textContent).toEqual(joke.title);
  });
});
