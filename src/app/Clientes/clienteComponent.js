(function () {
	'use strict';

	angular
	.module('app')
	.component('cliente', {
		controller: clienteController,
		templateUrl: 'app/Clientes/cliente.html',
		controllerAs: 'vm'
	});

	clienteController.$inject = ['clienteService'];

	function clienteController (clienteService) {
		var vm = this
		vm.mensaje = 'Mundooo';
		vm.clientes = []
		clienteService.query().$promise.then(function(data) {
			vm.clientes = data
		});
		
	}
})();
