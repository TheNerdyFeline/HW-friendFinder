var path = require("path");

// set up to send html files to server
module.exports = function(app) {
    app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
    // fill out survey
    app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // If no matching route is found default to home
    //app.use(function(req, res) {
//	res.sendFile(path.join(__dirname, "/../public/home.html"));
  //  });
};
