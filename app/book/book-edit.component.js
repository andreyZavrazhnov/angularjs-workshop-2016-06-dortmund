'use strict';

angular.module('myApp')
  .component('bookEdit', {
    templateUrl: 'app/book/book-edit.component.html',
    controller: function(bookApi) {
      var $ctrl = this;

      $ctrl.$routerOnActivate = function(next) {
        bookApi.find(next.params.isbn)
          .then(function(book) {
            $ctrl.book = book;
          })
      };

      $ctrl.save = function(book) {
        bookApi.update(book).then(function() {
          alert('Success');
        })
      }

    }
  });
