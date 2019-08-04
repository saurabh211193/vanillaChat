chatApp.controller('groupDetailsCtrl',function($scope,$state,$stateParams,$rootScope,socket,httpFactory){

	console.log('stateParams-----------',$stateParams);
	$scope.usersInCurrentGroup = [];
	if($stateParams && $stateParams.myparams){
		$scope.currentGroup = $stateParams.myparams;
	}

	$scope.usersToBeAdded = $rootScope.allUsers;
	$scope.usersInCurrentGroup.push($rootScope.currentSenderUser);

	socket.on('addedInGroup',function(userInGroup){
		console.log(userInGroup);
	});

	var groupDetails = {};
	groupDetails['name'] = $scope.currentGroup['name'];
	
	socket.on('addedInGroup',function(data){
        console.log(data);
    })

	$scope.addInGroup = function(user){
		if($scope.usersInCurrentGroup.indexOf(user) == -1){

			$scope.usersInCurrentGroup.push(user);
			
		}
		console.log('$scope.usersInCurrentGroup--------',$scope.usersInCurrentGroup);
		groupDetails['users'] = $scope.usersInCurrentGroup;
		socket.emit('sendUserInGroup',groupDetails);

	}
	

	// console.log($scope.usersInCurrentGroup);


});