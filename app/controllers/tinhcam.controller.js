app.controller('tinhcamCtrl', ['$scope', function($scope){
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
		likes:0
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
		likes:0
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
		likes:0
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
		likes:0
	}
	];
}]);