var express = require("express");
// Importing the express js
var app = express();

// app.get("/getUsers", (req, res) => {
//   res.send("Roman Ahmed");
// });
// // We are starting the app at port 3000

// app.get("/getTraining", (req, res) => {
//   var trainingObj = {
//     trainingId: 10,
//     trainingName: "Ëxpress Course",
//     active: true,
//   };

//   res.send(trainingObj);
// });

app.get("/read-users", (req, res) => {});

app.listen(3000);
