angular.module("myApp")
  .component("colorpicker", {
    templateUrl: "app/colorpicker.component.html",
    transclude: true,
    bindings: {
      r: '@',
      g: '@',
      b: '=',
      callback: '&'
    }
  });
