app.controller('pagesCtrl', ['$scope','$routeParams', function($scope,$routeParams){
	model();
	mod=new model;
	$scope.products=mod;
	var leg=mod.length;
	$scope.id=$routeParams.id;

	for (var i = 0;i<leg;i++) {
		if($routeParams.id==mod[i].id){
			$scope.item=mod[i];
			var pri=parseFloat( mod[i].price );
			$scope.quanti=pri;
			$scope.quantity=function(setNum){
				$scope.quanti = setNum*pri;
			}
		}
	}

	$scope.btnLike=function(){
		visitor.ip.address;
		$scope.show=true;
	}
	$scope.btnBuy=function(){
		if($('#btn_buy').text()==="BUY"){
			$('#btn_buy').text("UNBUY");
		}else{
			$('#btn_buy').text("BUY");
		}
		$scope.frmBuy=!$scope.frmBuy;
		$scope.num=1;
	}
}])