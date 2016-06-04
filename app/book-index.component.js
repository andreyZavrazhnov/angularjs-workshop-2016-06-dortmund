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

      $ctrl.searchTermFn = bookApi.bookSearchFilter;
    }
  });
