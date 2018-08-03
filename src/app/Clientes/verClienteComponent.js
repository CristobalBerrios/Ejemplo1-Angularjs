(function () {
	'use strict';

	angular
	.module('app')
	.component('verCliente', {
		controller: verClienteController,
		templateUrl: 'app/Clientes/verCliente.html',
		controllerAs: 'vm'
	});

	verClienteController.$inject = ['clienteService', '$stateParams'];

	function verClienteController (clienteService, $stateParams) {
		var vm = this
		var id = $stateParams.id;
		vm.cliente = {}
		clienteService.get({id: id}).$promise.then(function(data) {
			vm.cliente = data;
		})
		
	}
})();