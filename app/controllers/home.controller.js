app.controller('homeCtrl', ['$scope','$log', function($scope,$log){
	$scope.title="Books Shop";
	$scope.tab=0;
	$scope.bookepay=true;
	$scope.otherpay=false;
	$scope.sel=function(settab){
		$scope.tab=settab;
		if(settab===1){
			$scope.check(1);
		}else if(settab===2){
			$scope.check(2);
		}else if(settab===3){
			$scope.check(3);
		}else if(settab===4){
			$scope.check(4);
		}
	}
	$scope.check=function(ad){
		if($scope.tab===ad){
			return true;
		}else{
			return false;
		}
	}
	$scope.tab=function(stab){
		if(stab===1){
			$scope.bookepay=!$scope.bookepay;
			$scope.otherpay=!$scope.otherpay;
		}else{
			$scope.otherpay=!$scope.otherpay;
			$scope.bookepay=!$scope.bookepay;
		}
	}
	
}]);
