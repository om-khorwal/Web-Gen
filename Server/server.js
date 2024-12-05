const express = require("express");
const cors = require('cors') 
const server = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connect")
}
const userSchema = new mongoose.Schema({
  sitename : 'string',
  heroSection:'string',
  aboutSection:'string'
})

const User = mongoose.model('User', userSchema)
server.use(cors({
  origin: ['*', 'https://web-gen-frontend-five.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'] }));

server.use(bodyParser.json())


server.post('https://web-gen-nu.vercel.app',async(req,res)=>{
  let user = new User();
  user.sitename = req.body.sitename;
  user.heroSection = req.body.heroSection;
  user.aboutSection = req.body.aboutSection;
  const doc = await user.save();
  // console.log(doc)
  res.json(doc)
} )
server.get('/',async(req,res)=>{
  const docs = await User.find({})
  res.json(docs)
} )
server.get('/latest',async(req,res)=>{
  const latestdocs = await User.findOne().sort({_id:-1})
  res.json(latestdocs)
} )

server.listen(5001,()=>{
  console.log("chalu h")
})

// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect("your_mongo_connection_string", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.once("open", () =>
//   console.log("Connected to MongoDB successfully")
// );

// // Define a schema and model
// const DataSchema = new mongoose.Schema({
//   sitename: String,
//   heroSection: String,
//   aboutSection: String,
// });

// const Data = mongoose.model("Data", DataSchema);

// // API routes
// app.get("/api/data", async (req, res) => {
//   const data = await Data.find();
//   res.json(data);
// });

// app.post("/api/data", async (req, res) => {
//   const newData = new Data(req.body);
//   await newData.save();
//   res.json({ message: "Data saved successfully" });
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// node server.js
