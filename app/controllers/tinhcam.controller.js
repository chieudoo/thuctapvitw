app.controller('tinhcamCtrl', ['$scope', function($scope){
	model();
	mod =new model;
	$scope.products=[];
	
	for (var i = 0;i< mod.length ; i++) {
		if(mod[i].slug==="tinh-cam"){
			var ary=mod[i];
			$scope.products.push(ary);
		}
	}

}]);