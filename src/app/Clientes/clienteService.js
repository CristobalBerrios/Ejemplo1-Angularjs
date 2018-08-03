(function() {
  'use strict';

  angular
  .module('app')
  .service('clienteService', clienteService);

  clienteService.$inject = ['$resource', 'API'];

  function clienteService ($resource, API) {
    return $resource(API +'users/:id/', {id: '@id'});
  }
})();