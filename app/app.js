var app=angular.module('myApp', ['ngRoute']);
console.log('aloha');
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/view/main.template.html",
        controller: 'mainCtrl'
    })
    .when("/tinh-cam", {
        templateUrl : "app/view/tinhcam.template.html",
        controller : "tinhcamCtrl"
    })
    .when("/paris", {
        templateUrl : "paris.htm",
        controller : "parisCtrl"
    });
});

app.controller('mainCtrl', function($scope){
	$scope.title="Books Shop";
	$scope.msg="main";
	$scope.products=[
		{
			id:1,
			name:'Boss hung mãnh - Ông xã, kết hôn nào!',
			image:'image/sach-1.jpg',
			status:'Tap 1',
			lable:'Hot',
			category:'TinhCam',
			price:'3.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:2,
			name:'Boss hung mãnh - Ông xã, kết hôn nào!',
			image:'image/sach-2.jpg',
			status:'Tap 2',
			lable:'Hot',
			category:'TinhCam',
			price:'3.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:3,
			name:'Boss hung mãnh - Ông xã, kết hôn nào!',
			image:'image/sach-6.jpg',
			status:'Tap 4',
			lable:'Hot',
			category:'TinhCam',
			price:'5.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:4,
			name:'Chọc tức vợ yêu - Mua một tặng một',
			image:'image/sach-3.jpg',
			status:'Tap 1',
			lable:'Hot',
			category:'HaiHuoc',
			price:'4.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:5,
			name:'Chọc tức vợ yêu - Mua một tặng một',
			image:'image/sach-4.jpg',
			status:'Tap 2',
			lable:'Hot',
			category:'HaiHuoc',
			price:'4.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:6,
			name:'Chọc tức vợ yêu - Mua một tặng một',
			image:'image/sach-5.jpg',
			status:'Tap 3',
			lable:'Hot',
			category:'HaiHuoc',
			price:'5.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:7,
			name:'Thoát nạn trong gang tấc',
			image:'image/sach-7.jpg',
			status:'',
			lable:'Hot',
			category:'KhoaHoc',
			price:'2.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:8,
			name:'Bức thư bị lãng quên',
			image:'image/sach-8.jpg',
			status:'',
			lable:'',
			category:'TieuThuyet',
			price:'3.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:9,
			name:'Five children and it',
			image:'image/sach-9.jpg',
			status:'',
			lable:'',
			category:'TinhCam',
			price:'6.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
 		{
			id:10,
			name:'Dấu hiệu sớm cảnh báo mất trí nhớ',
			image:'image/sach-10.jpg',
			status:'',
			lable:'',
			category:'KhoaHoc',
			price:'4.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:11,
			name:'Những chuyến phiêu lưu nhất quả đất',
			image:'image/sach-11.jpg',
			status:'',
			lable:'',
			category:'TieuThuyet',
			price:'5.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		},
		{
			id:12,
			name:'Điệp viên hoàn hảo X6',
			image:'image/sach-12.jpg',
			status:'',
			lable:'HOT',
			category:'KhoaHoc',
			price:'4.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
		}
 
	];
});

app.controller('tinhcamCtrl', function($scope){
	$scope.msg="tinhcam";
	$scope.products=[
	{
		id:1,
		name:'Boss hung mãnh - Ông xã, kết hôn nào!',
		image:'image/sach-1.jpg',
		status:'Tap 1',
		lable:'Hot',
		category:'TinhCam',
		price:'3.99',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
		pubdate: new Date('2017','04','07'),
	},
	{
		id:2,
		name:'Boss hung mãnh - Ông xã, kết hôn nào!',
		image:'image/sach-2.jpg',
		status:'Tap 2',
		lable:'Hot',
		category:'TinhCam',
		price:'3.99',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
		pubdate: new Date('2017','04','07'),
	},
	{
		id:3,
		name:'Boss hung mãnh - Ông xã, kết hôn nào!',
		image:'image/sach-6.jpg',
		status:'Tap 4',
		lable:'Hot',
		category:'TinhCam',
		price:'5.99',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
		pubdate: new Date('2017','04','07'),
	},
	{
		id:9,
		name:'Five children and it',
		image:'image/sach-9.jpg',
		status:'',
		lable:'',
		category:'TinhCam',
		price:'6.59',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
		pubdate: new Date('2017','04','07'),
	}
	];
});

