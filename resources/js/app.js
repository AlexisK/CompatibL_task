var App = angular.module('App', [])


.factory('loadData', [function() {
    return function(path, todo) {
        jQuery.getJSON(path, todo);
    }
}])

.directive('colorRow', function() {
    
    function link(scope, element, attr) {
        var obj = scope.colors[attr.index];
        cr('td',null,element[0]).textContent = obj.colorName;
        cr('td',null,element[0]).style.backgroundColor = obj.hexValue;
    }
    
    return {
        link:link
    };
})


.controller('main-worker', ['$scope','loadData', function($scope,loadData) {
    loadData('data.json', function(data) {
        $scope.colors = data.colorsArray;
        $scope.$apply();
    });
}]);
