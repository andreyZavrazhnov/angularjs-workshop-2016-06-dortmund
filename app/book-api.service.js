angular.module('myApp')
  .service('bookApi', function($http) {
    var baseUrl = 'http://bookmonkey-api.angularjs.de';

    function responseHandler(response) {
      return response.data;
    }

    this.all = function() {
      return $http.get(baseUrl + '/books')
        .then(responseHandler);
    };
  });
