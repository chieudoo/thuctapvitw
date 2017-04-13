app.config(function($routeProvider) {

	$routeProvider.when('/',{
		templateUrl:'app/view/main.template.html',
		controller:'mainCtrl'
	})
	
	.when('/tinh-cam',{
		templateUrl:'app/view/tinhcam.template.html',
		controller:'tinhcamCtrl'
	})

	.when('/hai-huoc',{
		templateUrl:'app/view/haihuoc.template.html',
		controller:'haihuocCtrl'
	})

	.when('/khoa-hoc',{
		templateUrl:'app/view/khoahoc.template.html',
		controller:'khoahocCtrl'
	})

	.when('/tieu-thuyet',{
		templateUrl:'app/view/tieuthuyet.template.html',
		controller:'tieuthuyetCtrl'
	})
	.when('/pages/:id',{
		templateUrl:'app/view/pages.template.html',
		controller:'mainCtrl'
	})
	
	
})