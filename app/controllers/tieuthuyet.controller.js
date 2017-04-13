app.controller('tieuthuyetCtrl', ['$scope', function($scope){
	
	$scope.products=[

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
			likes:0
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
			likes:0
		},
		
	];

}])