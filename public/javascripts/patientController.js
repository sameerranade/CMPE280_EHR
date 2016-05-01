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
        });
    }
});