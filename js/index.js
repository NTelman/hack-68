console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

//handle might be handler
exports.handle = function(e, ctx, callback) {

	let scanningPerameters = {
		TableName: 'Jobs',
		Limit: 100
	};

	docClient.scan(scanningPerameters, function(err, data) {
		if(err){
			callback(err, null);
		}else{
			callback(null, data);
		}
	});

	//query
	/*var params = {
		TableName: 'Jobs',
		Key: {
			"JobID": 1
		}
	}

	docClient.get(params, function(err, data) {
		if(err){
			callback(err, null);
		}else{
			callback(null, data);
		}
	});*/
}