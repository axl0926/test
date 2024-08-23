import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const MONGODB = process.env.MONGODB;
const client = new MongoClient(MONGODB);

async function connectDB() {
	try {
		await client.connect();
		console.log("DB 연결 성공");
		return client;
	} catch (err) {
		console.error("DB 연결 실패", err);
		process.exit(1);
	}
}

export default connectDB;