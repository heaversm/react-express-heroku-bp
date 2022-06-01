const path = require("path");
const express = require("express");
let dotenv = require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY; //CHANGE THIS IN THE .ENV
const API_ENDPOINT = "https://myapi.com/api/v1/data/"; //FILL THIS IN

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Connected to Server" });
});

app.get("/getExternalEndpoint/:data", (req, res) => {
  const data = req.params.data || "";

  axios
    .get(`https://${API_ENDPOINT}]/${data}`, {
      headers: {
        "API-KEY": API_KEY, //change this to whatever your API requires in the headers
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      //return any relevant data here
      res.json({
        data: response,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        error: `there was an error with your request`,
        details: err,
      });
    });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
