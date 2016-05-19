var App = angular.module('App', [])


.controller('main-worker', ['$scope', function($scope) {
    jQuery.getJSON('data.json', function(data) {
        $scope.colors = data.colorsArray;
        $scope.$apply();
    });
}]);
