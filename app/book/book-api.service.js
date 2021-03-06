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

    this.find = function(isbn) {
      return $http.get(baseUrl + '/books/' + isbn)
        .then(responseHandler);
    };

    this.update = function(obj) {
      return $http.put(baseUrl + '/books/' + obj.isbn, obj)
        .then(responseHandler);
    };

    this.bookSearchFilter = function(searchTerm) {
      return function (book) {
        if (!searchTerm) {
          return true;
        }
        return book.title.indexOf(searchTerm) !== -1
          || book.author.indexOf(searchTerm) !== -1;
      }
    }
  });
