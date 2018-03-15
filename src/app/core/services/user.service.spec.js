describe('UserService', () => {
  let $httpBackend;
  let UserService;

  const userData = {
    "id": 12345,
    "firstname": "Firstname",
    "lastname": "Lastname",
    "email": "firstname@lastname.com",
    "username": "firstname.lastname",
    "avatar": "avatar.png",
  };

  beforeEach(angular.mock.module('core'));

  beforeEach(inject(function (_$httpBackend_, _UserService_) {
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;
  }));

  it('should get the user information', () => {
    $httpBackend.expectGET('/assets/data/user.json')
    .respond(200, userData);

    UserService.getLoggedUser().then((user) => {
      expect(user).toEqual(userData);
    });
    
    $httpBackend.flush();
  });
});
