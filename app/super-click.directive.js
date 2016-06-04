angular.module('myApp')
  .directive('superClick', function() {
    // directive definition object
    return {
      restrict: 'A',
      controller: function($scope, $element, $attrs, $parse) {
        $element.on('click', function(event) {
          $scope.$apply(function() {
            $parse($attrs.superClick)($scope, { $event: event })
          });
          console.log('Ich bin super! Booyaa!!!')
        });
      }
    }
  });
