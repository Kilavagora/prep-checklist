let express = require("express");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");
let ObjectID = mongodb.ObjectID;

const NOTES_COLLECTION = "clients";
const TEAM_COLLECTION = "team";
const COLOR_COLLECTION = "color";

let app = express();
app.use(bodyParser.json());

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