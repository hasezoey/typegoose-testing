// NodeJS: 18.10.0
// MongoDB: 5.0 (Docker)
// Typescript 4.9.5
// import { getModelForClass, prop } from '@typegoose/typegoose'; // @typegoose/typegoose@11.0.2
// import * as mongoose from 'mongoose'; // mongoose@7.0.5

import { index } from '@typegoose/typegoose';

@index({})
@index(
	{
		user: 1,
		deleted: 1,
		facility: 1,
		provider: 1,
	},
	{
		background: true,
	}
)
class T {}

// class User {
//   @prop()
//   public username?: string;
// }

// const UserModel = getModelForClass(User);

// async function main() {
//   await mongoose.connect(`mongodb://localhost:27017/`, {
//     dbName: 'verifyMASTER',
//   });

//   const doc = new UserModel({ username: 'user1' });

//   console.log(doc);

//   await mongoose.disconnect();
// }

// main();
