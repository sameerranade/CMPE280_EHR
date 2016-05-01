/**
 * Created by sameer on 4/30/16.
 */

angular.module('ehrApp', []).controller('patientController', function ($scope, $http) {
    $http.get('http://localhost:3000/patients').success(function (res) {
        $scope.plist = [];
        for(var i=0; i<res.length;i++){
            $scope.plist.push(res[i].user_firstname);
        }
        console.log($scope.plist);
    })

    $scope.getPatientDetails = function(pName){
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
    }
});