app.controller('mainCtrl', ['$scope','$filter','$log','$routeParams' ,function($scope,$filter,$log,$routeParams){
	$scope.txt="hot";
	$scope.txtLove="TinhCam";
	$scope.shot=true;
	$scope.show=false;
	$scope.frmBuy=false;

	$scope.products=[
		{
			id:1,
			name:'Boss hung mãnh - Ông xã, kết hôn nào!',
			image:'image/sach-1.jpg',
			status:'Tap 1',
			lable:'',
			category:'TinhCam',
			slug:'tinh-cam',
			price:'3.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','11'),
			likes:0
		},
		{
			id:2,
			name:'Boss hung mãnh - Ông xã, kết hôn nào!',
			image:'image/sach-2.jpg',
			status:'Tap 2',
			lable:'Hot',
			category:'TinhCam',
			slug:'tinh-cam',
			price:'3.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','11'),
			likes:0
		},
		{
			id:3,
			name:'Boss hung mãnh - Ông xã, kết hôn nào!',
			image:'image/sach-6.jpg',
			status:'Tap 4',
			lable:'Hot',
			category:'TinhCam',
			slug:'tinh-cam',
			price:'5.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','10'),
			likes:0
		},
		{
			id:4,
			name:'Chọc tức vợ yêu - Mua một tặng một',
			image:'image/sach-3.jpg',
			status:'Tap 1',
			lable:'Hot',
			category:'HaiHuoc',
			slug:'hai-huoc',
			price:'4.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','10'),
			likes:0
		},
		{
			id:5,
			name:'Chọc tức vợ yêu - Mua một tặng một',
			image:'image/sach-4.jpg',
			status:'Tap 2',
			lable:'Hot',
			category:'HaiHuoc',
			slug:'hai-huoc',
			price:'4.99',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		},
		{
			id:6,
			name:'Chọc tức vợ yêu - Mua một tặng một',
			image:'image/sach-5.jpg',
			status:'Tap 3',
			lable:'Hot',
			category:'HaiHuoc',
			slug:'hai-huoc',
			price:'5.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		},
		{
			id:7,
			name:'Thoát nạn trong gang tấc',
			image:'image/sach-7.jpg',
			status:'',
			lable:'Hot',
			category:'KhoaHoc',
			slug:'khoa-hoc',
			price:'2.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		},
		{
			id:8,
			name:'Bức thư bị lãng quên',
			image:'image/sach-8.jpg',
			status:'',
			lable:'',
			category:'TieuThuyet',
			slug:'tieu-thuyet',
			price:'3.59',
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
			slug:'tinh-cam',
			price:'6.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		},
 		{
			id:10,
			name:'Dấu hiệu sớm cảnh báo mất trí nhớ',
			image:'image/sach-10.jpg',
			status:'',
			lable:'',
			category:'KhoaHoc',
			slug:'khoa-hoc',
			price:'4.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		},
		{
			id:11,
			name:'Những chuyến phiêu lưu nhất quả đất',
			image:'image/sach-11.jpg',
			status:'',
			lable:'',
			category:'TieuThuyet',
			slug:'tieu-thuyet',
			price:'5.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		},
		{
			id:12,
			name:'Điệp viên hoàn hảo X6',
			image:'image/sach-12.jpg',
			status:'',
			lable:'HOT',
			category:'KhoaHoc',
			slug:'khoa-hoc',
			price:'4.59',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum voluptatum atque, optio corporis! Libero assumenda consequatur voluptate aliquam illo quia, quos provident itaque, enim? Sunt similique quos omnis asperiores!',
			pubdate: new Date('2017','04','07'),
			likes:0
		}
 
	];

	var leg=$scope.products.length;
	$scope.id=$routeParams.id;

	for (var i = 0;i<leg;i++) {
		if($routeParams.id==$scope.products[i].id){
			$scope.item=$scope.products[i];
			var pri=parseFloat( $scope.products[i].price );
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
		$scope.frmBuy=!$scope.frmBuy;
		$scope.num=1;
	}
	
}]);