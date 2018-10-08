
const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/todoAPI", (err, client) => {
	if (err) {
		return console.log(err);
	}

	console.log('connected');
	const db = client.db('todoAPI');

	db.collection('Todos').insertOne({
		text: 'something to do',
		completed: true 
	}, (err, result) => {
		if (err) {
			return console.log('unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops));
	
	});

	db.collection('Users').insertOne({
		username: 'Charles',
		password: 'charlesdu974'
	}, (err, result) => {
		if (err) {
			return console.log('unable to insert user')
		}

		console.log(JSON.stringify(result.ops));
	})

	client.close();
});