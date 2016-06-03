'use strict';

angular.module('myApp', ['ngComponentRouter'])
  .value('$routerRootComponent', 'app')
  .component('app', {
    templateUrl: 'app/app.component.html',
    $routeConfig: [
      { path: '/', component: 'home' }
    ]
  });
