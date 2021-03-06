angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('cliente', {
    	url: '/cliente',
    	component: 'cliente'
    })
    .state('verCliente', {
      url: '/cliente/:id',
      component: 'verCliente'
    })
}
