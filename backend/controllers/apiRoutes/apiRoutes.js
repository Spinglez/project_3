const Data = require("../../db/Data");
const Call = require('../utils/Call');

module.exports = app => {

  // Get request for all user info really only usefull for checking the db
  app.get('/api/Users', (req,res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  })

  app.get('/api/Users:User', (req,res) =>{
    Data.findOne({ email: req.params.User }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    })
  })

  app.post('/api/Users:id', (req,res) => {
    let id = req.params.id;
    const { userDescription } = req.body;
    console.log(id, userDescription);
      Data.findByIdAndUpdate(id, { userDescription: userDescription }, (err,data) =>{
          if (err) throw err;
          return res.json();
    })
  })

  app.post('/api/Users', (req,res) => {
    let data = new Data();

    console.log(req.body);

    const { token, firstName, lastName, email, movieSurvey, userDescription } = req.body;

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
    data.token = token;
    data.save(err => {
      if (err) throw err;
      return res.json();
    });
  })

  // End user <API>Routes</API>
  // Start Daata Processing Routes

  app.get('/api/match', (req,res) => {
      let { user1Arr, user2Arr } = req.body;
      dataProc.Match(user1Arr, user2Arr)

  })

  app.get('/api/call:call', (req,res) =>{
    let query = req.params.call
    console.log(
      Call.tmDB(query).then(response => {
        return res.json(response.data);
      })
      .catch(err => {
        console.error(err);
      })
    );
  })
}
