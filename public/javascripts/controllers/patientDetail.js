
  ehrApp.config(function($routeProvider) {
  		$routeProvider

  			// route for the home page
  			.when('/allergies', {
  				templateUrl : 'patient_pages/allergies.html',
  				controller  : 'PatientController'
  			})

  			.when('/size', {
  				templateUrl : 'patient_pages/size.html',
  				controller  : 'PatientController'
  			})

  			// route for the cheese page
  			.when('/cheese', {
  				templateUrl : 'patient_pages/cheese.html',
          controller  : 'PatientController'
  			})

  			.when('/toppings', {
  				templateUrl : 'patient_pages/toppings.html',
          controller  : 'PatientController'
  			})

  	});

    ehrApp.controller('PatientController', function($scope) {
    	   $scope.greeting = 'Hola!';

        };
