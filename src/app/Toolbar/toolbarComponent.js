(function () {
	'use strict';

	angular
	.module('app')
	.component('toolbar', {
		controller: toolbarController,
		templateUrl: 'app/Toolbar/toolbar.html',
		controllerAs: 'vm'
	});

	function toolbarController () {
		var vm = this
		vm.mensaje = 'Mi Aplicacion';
	}
})();
