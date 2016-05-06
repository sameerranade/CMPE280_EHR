var ehrApp = angular.module('ehrApp',['ngRoute']);

  ehrApp.config(function($routeProvider) {
  		$routeProvider

  			// route for the home page
  			.when('/allergies', {
  				templateUrl : 'patient_pages/allergies.html',
  				controller  : 'PatientDetail'
  			})

  			.when('/size', {
  				templateUrl : 'patient_pages/size.html',
  				controller  : 'PatientDetail'
  			})

  			// route for the cheese page
  			.when('/cheese', {
  				templateUrl : 'patient_pages/cheese.html',
          controller  : 'PatientDetail'
  			})

  			.when('/toppings', {
  				templateUrl : 'patient_pages/toppings.html',
          controller  : 'PatientDetail'
  			})

  	});
