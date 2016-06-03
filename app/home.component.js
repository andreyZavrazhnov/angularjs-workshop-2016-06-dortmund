'use strict';

angular.module('myApp')
  .component('home', {
    templateUrl: 'app/home.component.html',
    controller: function() {
      this.red = 10;
      this.green = 20;
      this.blue = 200;
    }
  });
