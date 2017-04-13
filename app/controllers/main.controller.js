app.controller('mainCtrl', ['$scope','$filter','$log','$routeParams','$interval' ,function($scope,$filter,$log,$routeParams,$interval){
	$scope.txtLove="TinhCam";
	$scope.shot=true;
	$scope.show=false;
	$scope.frmBuy=false;

	model();
	mod = new model;
	$scope.products=mod;
	
	var slide=function(){
		$('#slide ul li:first').animate({'margin-bottom':'-=400px'},1000, function(){
			$('#slide ul li:first').appendTo('#slide ul');
			$('#slide ul li').css('margin-bottom','0px');
		})
	}
	$interval(slide,3000);
	
}]);