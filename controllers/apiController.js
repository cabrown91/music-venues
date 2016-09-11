function index(req, res) {
  res.json({
    message: "Welome to our app! Locate cool music venues in San Francisco.",
    documentation_url: "https://github.com/cabrown91/music-venues",
    base_url: "https://salty-bayou-63471.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/venues", description: "Get all the venues in the database"},
      {method: "POST", path: "/api/venues", description: "Create a new venue in the database"},
    ]
  });
}

module.exports.index = index;
