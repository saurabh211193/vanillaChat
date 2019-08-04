var user = require('mongoose').model('User');
exports.createGroup = function(groupData,socket,io,rClient){

	console.log('BHULLLAAAAAA')
	// console.log(groupData);
	var users = groupData['users'];

	for(var i=0;i<users.length;i++){
		/*var id = users[i]['_id'];
		console.log(id);*/
		console.log(users[i]);
		var id = users[i]['_id'];
		if(id in users[i]){
			console.log('y')
		}
		else{
			console.log('n')
		}
		/*console.log(socketId);
		console.log('--------');
		if(socketId != undefined && io.sockets.connected[socketId]){
			console.log(socketId);
			console.log(groupData)

			io.to(socketId).emit('addedInGroup',groupData);

			


		}*/

	}

}