angular.module('myApp', []);

$i=0;

angular.module('myApp')
.controller("controller1", function($scope, $log){
	$log.info("controller1 init ...");
	$scope.message = "hello world";
	
	
	$scope.onClick = function() {
		$log.info("Cliked ...");
		
		$scope.message = $scope.message + "!";
		
	}
});


angular.module('myApp')
.controller("controller2", function($scope, $log){
	$log.info("controller2 init ...");
	$scope.message = "hello world 2";
	$scope.onClick = function() {
		$log.info("Cliked ...");
		$i= $i+1;
		if
		($i %2 == 0 )
		{
			$scope.message = $scope.message + $i;
		}else
			{
			$scope.message = "oups";
			}
		
		
		
	}
});


angular.module('myApp')
.controller("controller3", function($scope, $log){
	$log.info("controller3 init ...");
	$scope.message = "show message";
	$scope.onClick = function() {
		$log.info("Cliked ...");
		if
		($scope.showmessage == true )
		{
			$scope.message = $scope.message;
			$scope.showmessage = false; 
		}else
			{
			$scope.showmessage = true;
			}
		
		
		
	}
});
