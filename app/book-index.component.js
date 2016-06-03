'use strict';

angular.module('myApp')
  .component('bookIndex', {
    templateUrl: 'app/book-index.component.html',
    controller: function(bookApi) {
      var $ctrl = this;

      bookApi.all()
        .then(function(books) {
          $ctrl.books = books;
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
