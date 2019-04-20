var express = require("express");
var app = express();

var mongojs = require("mongojs");
var db = mongojs('todo', ['tasks']);

var bodyParser = require('body-parser');

var { check, validationResult } = require('express-validator/check');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.requestMethod("url", optionalMiddleWare [] or function() { }, function(req, res) { actualLogic } );
app.post("/tasks", [
    check("subject").exists().withMessage("Subject cannot be blank!"),
], function (req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() })
    } else {
        var subject = req.body.subject;
        db.tasks.insert({ subject, status: 0 }, function (err, data) {
            res.json(data);
        });
    }
});

app.get('/tasks/:id', function (req, res) {
    var id = req.params.id;
    db.tasks.find({ "_id": mongojs.ObjectId(id) }, function (err, data) {
        res.json(data);
    });
});

app.get("/tasks", function (req, res) {
    db.tasks.find(function (err, data) {
        res.json(
            data.map(task => {
                task.url = "http://localhost:8000/tasks/" + task._id;
                return task;
            })
        );
    });
});

app.delete('/tasks/:id', function (req, res) {
    var id = req.params.id;
    db.tasks.remove({ "_id": mongojs.ObjectId(id) }, function (err, data) {
        res.json(data);
    });
});

app.patch("/tasks/:id", function (req, res) {
    var id = req.params.id;
    var status = parseInt(req.body.status);
    db.tasks.update(
        { "_id": mongojs.ObjectId(id) },
        {
            $set: {
                status: status
            }
        },
        function (err, data) {
            res.json(data);
        });
});

app.listen(8000, function () {
    console.log('todo api started at port 8000');
})