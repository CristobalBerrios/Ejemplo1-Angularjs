(function () {
	'use strict';

	angular
	.module('app')
	.component('cliente', {
		controller: clienteController,
		templateUrl: 'app/Clientes/cliente.html',
		controllerAs: 'vm'
	});

	function clienteController () {
		this.mensaje = 'Mundooo';
	}
})();
