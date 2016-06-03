'use strict';

angular.module('myApp', [])
  .component('app', {
    templateUrl: 'app/app.component.html',
    controller: function() {
      this.red = 10;
      this.green = 20;
      this.blue = 200;
    }
  });
