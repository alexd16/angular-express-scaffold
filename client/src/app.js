const angular = require('angular');
const app = angular.module('app', []);

app.component('app', {
  controllerAs: 'vm',
  templateUrl: './app.html',
  controller: [ class {

  }]
})
require('./board/board');