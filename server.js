// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var db         = require('./models/index.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// test whether to return JSON or HTML
router.get('/', function(req, res) {
    if(req.accepts('html')){
      res.json({ message: 'Accepts HTML'});
    } else if(req.accepts('json')){
      res.json({ message: 'Accepts JSON'});
    };
    // Disable example message
    //res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
router.route('/widgets')

    // create a widget (accessed at POST http://localhost:8080/api/widgets)
    .post(function(req, res) {
        
        var widget = new Widget();      // create a new instance of the Widget model
        widget.name = req.body.name;  // set the widgets name (comes from the request)

        // save the widget and check for errors
        widget.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Widget created!' });
        });
        
    })
    .get(function(req, res) {
      res.json({ message: 'Getting Widgets!' });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);