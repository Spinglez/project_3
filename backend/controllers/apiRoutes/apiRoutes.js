const Data = require("../../db/Data");

module.exports = (app) => {
  console.log("Im connected");
  app.get('/api/Users', (req,res) => {
    res.json(Data)
  })

  app.post('/api/Users', (req,res,next) => {
    console.log('testing');
    let data = new Data();

    console.log(req.body);

    const { uuid, firstName, lastName, email, movieSurvey, userDescription } = req.body;

    if ((!uuid && uuid !== 0) || !movieSurvey) {
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
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
    next();
  })
}
