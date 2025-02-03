import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        throw new Error("Cannot Connect To MongoDB");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        throw new Error("Cannot Connect To MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map