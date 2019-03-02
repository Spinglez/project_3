const Data = require("../../db/Data");

module.exports = app => {

  console.log("Im connected");
  // Get request for all user info really only usefull for checking the db
  app.get('/api/Users', (req,res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  })

  app.get('/api/Users:user', (req,res) =>{
    data.findOne
  })

  app.post('/api/Users', (req,res) => {
    console.log('testing');
    let data = new Data();

    console.log(req.body);

    const { uuid, firstName, lastName, email, movieSurvey, userDescription } = req.body;

    if ((!uuid && uuid !== 0) || !movieSurvey || !email) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.movieSurvey = movieSurvey;
    data.userDescription = userDescription;
    data.uuid = uuid;
    data.save(err => {
      if (err) throw err;
      return res.json();
    });
  })
}
