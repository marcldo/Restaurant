const express = require("express");
const path = require("path");

// express variables
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Reservation data...
var reservations = [
  {
    name: "Poonam",
    phone: 2937492748,
    email: "poonam123@abc.ca",
    uniqueID: 11
  },
  {
    name: "Marc",
    phone: 2928422748,
    email: "marc123@abc.ca",
    uniqueID: 22
  },
  {
    name: "Wajiha",
    phone: 2937499008,
    email: "wajiha123@abc.ca",
    uniqueID: 33
  }
];

// WaitList Data..

var waitList = [
  {
    name: "Nancy",
    phone: 8472957210,
    email: "nancy123@abc.ca",
    uniqueID: 12
  },
  {
    name: "Zain",
    phone: 9184037256,
    email: "Zain123@abc.ca",
    uniqueID: 34
  }
];

// Basic route that sends the user first to the AJAX Page..

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Display Reservations..

app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// Display WaitList..

app.get("/api/waitList", function (req, res) {
  return res.json(waitList);
});

// Adding new Reservation..

app.post("/api/reservations", (req, res) => {
  let newReservation = req.body;

  console.log(newReservation);

  if (reservations.length < 5){
    reservations.push(newReservation);
  }

  else {
    waitList.push(newReservation);
  }  
  
  console.log(reservations);
  console.log(waitList);

  res.json(newReservation);
});

// start the server
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
