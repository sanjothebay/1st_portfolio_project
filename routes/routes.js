// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
      // console.log(data);
      res.render("index")

  });
  app.get("/contact", function(req, res) {
    // console.log(data);
    res.render("contact")

});
app.get("/portfolio", function(req, res) {
  // console.log(data);
  res.render("portfolio")

});

};