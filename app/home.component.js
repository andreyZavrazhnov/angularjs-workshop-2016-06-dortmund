'use strict';

angular.module('myApp')
  .component('home', {
    templateUrl: 'app/home.component.html',
    controller: function($parse) {
      this.red = 10;
      this.green = 20;
      this.blue = 200;

      this.logColors = function(r, g, b) {
        console.log('R:', r, 'G:', g, 'B:', b)
      };





      var myScope = {
        logColors: function(r, g, b) {
          console.log('R:', r, 'G:', g, 'B:', b)
        }
      };
      var colorScope = {
        r: 10,
        g: 40,
        b: 200
      };
      var result = $parse('[1,2,3]')(myScope, colorScope);

    }
  });
