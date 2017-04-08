<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="//code.jquery.com/jquery.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="assets/bootstrap-3.3.7-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/font-awesome-4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
	<script type="text/javascript" src="assets/js/jquery-3.2.0.min.js"></script>
	<script type="text/javascript" src="assets/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/js/angular.min.js"></script>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<script type="text/javascript" src="app/modules/app.module.js"></script>
	<script type="text/javascript" src="app/controllers/main.controller.js"></script>
</head>
<body>
<div class="container" ng-controller="mainController as ctr">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<div id="header">
				<img class="icon-logo" src="image/book-icon.png">
				<h3>{{title}}</h3>
				<h4>{{ subtitle }}</h4>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<div id="menu">
				<div role="tabpanel">
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation">
							<a href="#" aria-controls="home" role="tab" ng-click="ctr.sel(1)" data-toggle="tab">HOME</a>
						</li>
						<li role="presentation">
							<a href="#" aria-controls="tab" role="tab" ng-click="ctr.sel(2)"  data-toggle="tab">Tình Cảm</a>
						</li>
						<li role="presentation">
							<a href="#" aria-controls="tab" role="tab" ng-click="ctr.sel(3)"  data-toggle="tab">Hài Hước</a>
						</li>
						<li role="presentation">
							<a href="#" aria-controls="tab" role="tab" ng-click="ctr.sel(4)"  data-toggle="tab">Khoa Học</a>
						</li>
						<li role="presentation">
							<a href="#" aria-controls="tab" role="tab" ng-click="ctr.sel(5)"  data-toggle="tab">Tiểu Thuyết</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
		<!-- Nav tabs -->
		
	
		<!-- Tab panes -->
		<div class="tab-content">
			<div role="tabpanel" class="tab-pane active">
				<div class="col-sm-3 col-md-3 col-lg-3" ng-repeat="pro in products | filter: ctr.txt">
					<div class="item">
						<a href=""><img src="{{pro.image}}"></a>
						<h4>{{pro.name | uppercase }}</h4>
						<p class="price">{{pro.price | currency }}</p>
						<h5>{{pro.status}}</h5>
						<p class="date">{{ pro.pubdate | date}}</p>
						<span>{{pro.lable}}</span>
					</div> 
				</div>
			</div>
			
		</div>
	</div>
</div>
</body>
</html>