import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// Connection and listneres
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
  app.listen(PORT, () => console.log("Server Open & Connected To Databasehand 👌"));
}).catch(err => console.log(err));












// app.delete("/user/:id", (req, res, next) => {
//   console.log(req.params.id);
//   return res.send("Hello");
// });