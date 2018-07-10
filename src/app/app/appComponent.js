(function () {
	'use strict';

	angular
	.module('app')
	.component('app', {
		controller: appController,
		templateUrl: 'app/app/app.html',
		controllerAs: 'vm'
	});

	function appController () {
		var vm = this
		vm.mensaje = 'Componente app';
	}
})();
