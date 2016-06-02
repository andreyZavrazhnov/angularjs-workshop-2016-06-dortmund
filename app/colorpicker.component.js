angular.module("myApp")
  .component("colorpicker", {
    templateUrl: "app/colorpicker.component.html",
    bindings: {
      r: '@',
      g: '@',
      b: '='
    }
  });
