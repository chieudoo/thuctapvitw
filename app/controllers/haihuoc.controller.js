app.controller('haihuocCtrl', ['$scope','$log', function($scope,$log){
	model();
	mod=new model;
	var leg=mod.length;
	$scope.products=[];
	for (var i = 0; i < leg; i++) {
		if(mod[i].slug==="hai-huoc"){
			var ary=mod[i];
			$log.info(ary);
			$scope.products.push(ary);
		}
	}
	$log.info($scope.products);
	
}])