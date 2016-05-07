var ehrApp = angular.module('ehrApp',['ngRoute']);

  ehrApp.config(function($routeProvider) {
  		$routeProvider

  			// route for the home page
  			.when('/allergies', {
  				templateUrl : 'patient_pages/allergies.html',
  				controller  : 'PatientDetail'
  			})

  			.when('/medical_history', {
  				templateUrl : 'patient_pages/medical_history.html',
  				controller  : 'PatientDetail'
  			})

  			// route for the cheese page
  			.when('/medications', {
  				templateUrl : 'patient_pages/medications.html',
          controller  : 'PatientDetail'
  			})

  			.when('/vaccination', {
  				templateUrl : 'patient_pages/vaccination.html',
          controller  : 'PatientDetail'
  			})

        .when('/test_records', {
  				templateUrl : 'patient_pages/test_records.html',
          controller  : 'PatientDetail'
  			})

  	});
