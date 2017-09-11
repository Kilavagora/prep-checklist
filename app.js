let express = require("express");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");
let ObjectID = mongodb.ObjectID;

const NOTES_COLLECTION = "clients";
const TEAM_COLLECTION = "team";
const COLOR_COLLECTION = "color";
const nodemailer = require('nodemailer');


let app = express();
app.use(bodyParser.json());

//Allow Cross Domain Posts
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(allowCrossDomain);

// Static file server
let staticDir = __dirname + "/static/";
app.use(express.static(staticDir));

let db;

// Connect to the database and if successful start the server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/civicPlus")
  .then((database) => {
    db = database;
    console.log("Database connection ready");
    let server = app.listen(process.env.PORT || 8080, () => {
      let port = server.address().port;
      console.log("App now running on port", port);
    });
  }).catch((err) => {
    console.log(err);
    process.exit(1);
  });

// Error handler.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({
    "error": message
  });
}

// Client Records API

// GET: list all client records
app.get("/api/clients", (req, res) => {
  db.collection(NOTES_COLLECTION).find({}).toArray()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to get client records.");
    });
});

// POST: create a new client record
app.post("/api/clients", (req, res) => {
  let newnote = req.body;
  newnote.createDate = new Date();

  //if (!req.body.notes) {
  //  handleError(res, "Invalid user input", "Must provide a note.", 400);
  //}

  db.collection(NOTES_COLLECTION).insertOne(newnote)
    .then((doc) => {
      res.status(201).json(doc.ops[0]);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to create new record.");
    });

});

// GET: find client record by id
app.get("/api/clients/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  db.collection(NOTES_COLLECTION).findOne({
    _id: new ObjectID(id)
  })
    .then((doc) => {
      if (!doc) {
        handleError(res, "Id does not exist", "Not found :(", 404);
        return;
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to get record");
    });
});

// PUT: update client record by id
app.put("/api/clients/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  let updateDoc = req.body;
  delete updateDoc._id;

  updateDoc.lastUpdated = new Date();

  db.collection(NOTES_COLLECTION).updateOne({
    _id: new ObjectID(id)
  }, updateDoc)
    .then((doc) => {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to update client record");
    });
});

// DELETE: deletes client record by id
app.delete("/api/clients/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  db.collection(NOTES_COLLECTION).deleteOne({
    _id: new ObjectID(id)
  }).then((result) => {
    res.status(200).json({
      id: req.params.id,
      result: result
    });
  }).catch((err) => {
    handleError(res, err.message, "Failed to delete client record");
  });
});




// Team Members API

// GET: list all client records
app.get("/api/team", (req, res) => {
  db.collection(TEAM_COLLECTION).find({}).toArray()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to get team list.");
    });
});

// POST: create a new client record
app.post("/api/team", (req, res) => {
  let newnote = req.body;
  console.log(req);
  newnote.createDate = new Date();

  //if (!req.body.notes) {
  //  handleError(res, "Invalid user input", "Must provide a note.", 400);
  //}

  db.collection(TEAM_COLLECTION).insertOne(newnote)
    .then((doc) => {
      res.status(201).json(doc.ops[0]);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to create new team member.");
    });

});

// GET: find client record by id
app.get("/api/team/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  db.collection(TEAM_COLLECTION).findOne({
    _id: new ObjectID(id)
  })
    .then((doc) => {
      if (!doc) {
        handleError(res, "Id does not exist", "Not found :(", 404);
        return;
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to get team member");
    });
});

// PUT: update client record by id
app.put("/api/team/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  let updateDoc = req.body;
  delete updateDoc._id;

  db.collection(TEAM_COLLECTION).updateOne({
    _id: new ObjectID(id)
  }, updateDoc)
    .then((doc) => {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to update team member");
    });
});

// DELETE: deletes client record by id
app.delete("/api/team/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  db.collection(TEAM_COLLECTION).deleteOne({
    _id: new ObjectID(id)
  }).then((result) => {
    res.status(200).json({
      id: req.params.id,
      result: result
    });
  }).catch((err) => {
    handleError(res, err.message, "Failed to delete team member");
  });
});




// Color Palette API

// GET: list all client records
app.get("/api/color", (req, res) => {
  db.collection(COLOR_COLLECTION).find({}).toArray()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to get color palette list.");
    });
});

// POST: create a new client record
app.post("/api/color", (req, res) => {
  let newnote = req.body;
  newnote.createDate = new Date();

  //if (!req.body.notes) {
  //  handleError(res, "Invalid user input", "Must provide a note.", 400);
  //}

  db.collection(COLOR_COLLECTION).insertOne(newnote)
    .then((doc) => {
      res.status(201).json(doc.ops[0]);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to create new color palette.");
    });

});

// GET: find client record by id
app.get("/api/color/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  db.collection(COLOR_COLLECTION).findOne({
    _id: new ObjectID(id)
  })
    .then((doc) => {
      if (!doc) {
        handleError(res, "Id does not exist", "Not found :(", 404);
        return;
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to get color palette");
    });
});

// PUT: update client record by id
app.put("/api/color/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  let updateDoc = req.body;
  delete updateDoc._id;

  db.collection(COLOR_COLLECTION).updateOne({
    _id: new ObjectID(id)
  }, updateDoc)
    .then((doc) => {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    })
    .catch((err) => {
      handleError(res, err.message, "Failed to update color palette");
    });
});

// DELETE: deletes client record by id
app.delete("/api/color/:id", (req, res) => {

  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    handleError(res, "Invalid id", "Must provide a valid id.", 400);
  }

  db.collection(COLOR_COLLECTION).deleteOne({
    _id: new ObjectID(id)
  }).then((result) => {
    res.status(200).json({
      id: req.params.id,
      result: result
    });
  }).catch((err) => {
    handleError(res, err.message, "Failed to delete color palette");
  });
});


//SMTP Service


//// Generate test SMTP service account from ethereal.email
//// Only needed if you don't have a real mail account for testing
app.post('/api/mail', function (req, res) {

  // SMTP settings
  let transportOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT | 0, //Convert to int
    ignoreTLS: process.env.SMTP_IGNORE_TLS == "true",
    secure: process.env.SMTP_SECURE == "true",
  };

  if (process.env.MAIL_AUTH_USER && process.env.MAIL_AUTH_PASS) {
    transportOptions.auth = {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS
    };
  }
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(transportOptions);

  //Format object data for email
  let myText = req.body.clientName + 'has been prepped for web development by ' + req.body.prepDesigner + '. The project team consists of project manager ' + req.body.projectManager + ', art director ' + req.body.artDirector + ', and comp designer ' + req.body.compDesigner + ".";
  let myHtml = '<html><h4>' + req.body.clientName + ' has been prepped for web development by ' + req.body.prepDesigner + '</h4> <strong><p>Asset location: </strong>' + req.body.filePath + '</p><strong>The project team consists of:</strong><ul><li> Project manager: ' + req.body.projectManager + '</li><li>Art director: ' + req.body.artDirector + '</li><li>Comp designer: ' + req.body.compDesigner + '</li></ul> <strong><p>Project e-mail: </strong>'+ req.body.projectEmail +'</p><strong><p>Notes: </strong>'+ req.body.notes +'</p></html>';
   
  // setup email data
  let mailOptions = {
    from: process.env.MAIL_FROM, // sender address
    to: process.env.MAIL_TO, // list of receivers
    subject: 'Hello', // Subject line
    text: myText,// plain text body
    html: myHtml
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      handleError(res, err, "Err! Failed to send email :(")
    } else {
      res.status(200).json({ messageId: info.messageId });
      console.log('Message sent: %s', info.messageId);
    }
    // If we close transport before sending the response, response never gets sent. 
    transporter.close();
  });
});