app.controller('khoahocCtrl', ['$scope', '$log' , function($scope,$log){
	model();
	mod = new model;

	$scope.products=[];
	var leg=mod.length;
	for (var i = 0;i<12;i++) {
		if(mod[i].slug==="khoa-hoc"){
			var ary=mod[i];
			$scope.products.push(ary);
		}
	}
}])		