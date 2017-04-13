app.controller('haihuocCtrl', ['$scope', function($scope){
	$scope.products=[
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
			likes:0
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
			likes:0
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
			likes:0
		}
	];
}])