const angular = require('angular');

const app = angular.module('app');

app.component('board', {
  controllerAs: 'vm',
  templateUrl: './board.html',
  controller: [ class {

  }]
})
require("../square/square");