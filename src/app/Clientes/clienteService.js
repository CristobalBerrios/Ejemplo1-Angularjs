(function() {
  'use strict';

  angular
  .module('app')
  .service('clienteService', clienteService);

  clienteService.$inject = ['$resource'];

  function clienteService ($resource) {
    return $resource('https://jsonplaceholder.typicode.com/users/:id', {id: '@id'});
  }
})();