JokesService.$inject = ['$http', '$q'];

export default function JokesService($http, $q) {
  this._jokes = null;

  this.getAll = function () {
    const self = this;

    if (self._jokes == null) {
      // initialize with sample data
      return $http.get("/assets/data/jokes.json").then(
        function(response) {
          self._jokes = response.data;
          return self._jokes;
        });
    }

    return $q.when(self._jokes);
  }
}
