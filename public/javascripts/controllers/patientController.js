/**
 * Created by sameer on 4/30/16.
 */

ehrApp.controller('patientController', function ($scope, $http) {

    $http.get('http://localhost:3000/patients').success(function (res) {

        $scope.currentPage = 0;
        $scope.pageSize = 4;
        $scope.plist = [];
        //$scope.data = [];
        $scope.numberOfPages = function () {
            return Math.ceil($scope.plist.length / $scope.pageSize);
        }
        for (var i = 0; i < 40; i++) {
            if (res[i].user_firstname != null) {
                $scope.plist.push(res[i].user_firstname);
            }
        }

    });

    $scope.getPatientDetails = function (pName) {
        console.log(pName);
        var url = 'http://localhost:3000/patients/' + pName + '/';
        $http.get(url).success(function (res) {
            console.log(res);

            $scope.pname = pName;
            $scope.uid = res[0].uer_id;
            $scope.height = res[0].hight;
            $scope.weight = res[0].weight;
            $scope.address = res[0].address;
            $scope.phone = res[0].phone;
            $scope.emerphone = res[0].emergency_contact;
            $scope.bgroup = res[0].blood_type;
            $scope.gender = res[0].gender;
            $scope.ethnicity = res[0].ethinicity;
            $scope.languages = res[0].languagetype;
            $scope.bday = res[0].Birthday;
        });
        $('#welcomeDiv').hide();
        $('#patientDiv').show();

        $("#closeDiv").click(function () {
            $('#patientDiv').hide();
            $('#welcomeDiv').show();
            //$('#patientDiv').hide();
        })

    }

    $scope.getAppointments = function (pName) {
        $scope.applist = [];
        var url = 'http://localhost:3000/appointments/';
        $http.get(url).success(function (res) {
            console.log(res);
            $scope.applist = res;
        });
    }
}).filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
