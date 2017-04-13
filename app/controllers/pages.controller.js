app.controller('pagesCtrl', ['$scope','$routeParams','$log', function($scope,$routeParams,$log){
	$scope.msg="this is pages";
	$log.info($routeParams.id);
}])