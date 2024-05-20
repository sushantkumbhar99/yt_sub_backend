const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port=3000
require("dotenv").config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://sushantkumbhar8123:sushant123@sushant1.mizuuaf.mongodb.net/" || "mongodb://127.0.0.1:27017/subscribers"
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

//Import the router files
const subscribersRoute = require("./routes/subscriber_routes.js");
app.use("/subscribers", subscribersRoute);
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
// const PORT = process.env.PORT || 3000;''
// app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

//Use this while testing
module.exports = app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
); 