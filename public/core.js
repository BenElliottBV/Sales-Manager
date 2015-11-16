angular.module('salesManager', ['ngRoute'])
.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/admin', {
    templateUrl: 'admin.html',
    controller: 'adminCtrl'
  })
  .otherwise({
    redirectTo: '/admin'
  })

}])
.controller('adminCtrl',function($scope, $http){
  $scope.formData = {};

  $scope.getShop = function(){
    // when landing on the page, get all todos and show them
    $http.get('/api/orders')
    .success(function(data) {
      $scope.shop = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  }

  $scope.getShop();
})
