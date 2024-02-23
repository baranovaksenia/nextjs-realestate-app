import mongoose from "mongoose"

let connected = false

const connectDB = async () => {
	mongoose.set("strictQuery", true)
	// if the database already connected, then don't connect again
	if (connected) {
		console.log("Database is already connected")
		return
	}

	// connect to the database
	try {
		await mongoose.connect(process.env.MONGO_URI)
		connected = true
		console.log("Database connected")
	} catch (error) {
		console.log(error)
	}
}
export default connectDB
