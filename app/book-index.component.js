'use strict';

angular.module('myApp')
  .component('bookIndex', {
    templateUrl: 'app/book-index.component.html',
    controller: function($http) {
      var $ctrl = this;

      $http.get('http://bookmonkey-api.angularjs.de/books')
        .then(function(response) {
          $ctrl.books = response.data;
        });

      $ctrl.searchTermFn = function(searchTerm) {
        return function(book) {
          if(!searchTerm) {
            return true;
          }
          return book.title.indexOf(searchTerm) !== -1
            ||  book.author.indexOf(searchTerm) !== -1;
        }
      }
    }
  });
