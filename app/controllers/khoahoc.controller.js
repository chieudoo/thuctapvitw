app.controller('khoahocCtrl', ['$scope', function($scope){
	$scope.products=[

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
			likes:0
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
			likes:0
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
			likes:0
		}
	];
}])		