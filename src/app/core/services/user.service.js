UserService.$inject = ['$http', '$q'];

export default function UserService($http, $q) {
  this._user = null;

  this.getLoggedUser = function () {
    const self = this;

    if (self._user == null) {
      return $http.get("/assets/data/user.json").then(
        function(response) {
          self._user = response.data;
          return self._user;
        });
    }
    
    return $q.when(self._user);
  }
}
