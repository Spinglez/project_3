const db = require("../../db/Data");
const Call = require('../utils/Call');
// import matchPromise from "../dataProcessors/Promises"

module.exports = app => {

  // Get request for all user info really only usefull for checking the db
  app.get('/api/Users', (req,res) => {
    db.Users.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  })

  app.get('/api/Users:User', (req,res) =>{
    db.Users.findOne({ email: req.params.User }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    })
  })

  app.post('/api/Users:id', (req,res) => {
    let id = req.params.id;
    const { userDescription } = req.body;
    console.log(id, userDescription);
      db.Users.findByIdAndUpdate(id, { userDescription: userDescription }, (err,data) =>{
          if (err) throw err;
          return res.json();
    })
  })

  app.post('/api/Users', (req,res) => {
    let data = new db.Users();

    console.log(req.body);

    // const { token, firstName, lastName, email, movieSurvey, userDescription } = req.body;

    // if ((!token && token !== 0) || !movieSurvey || !email) {
    //   return res.json({
    //     success: false,
    //     error: "INVALID INPUTS"
    //   });
    // }
    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    // data.email = email;
    data.movieSurvey = req.body.movieSurvey;
    // data.userDescription = userDescription;
    // data.token = token;
    data.save(err => {
      if (err) throw err;
      return res.json();
    });
  })

  // End user <API>Routes</API>
  // Start Data Processing Routes

  // app.get('/api/test:', (req,res) => {
  //   matchPromise(req.params.email)
  // })

  app.get('/api/match', (req,res) => {
      let { email1, email2 } = req.body;
      dataProc.Match(email1, email2)
  })

  app.get('/api/call:call', (req,res) =>{
    let query = req.params.call
    Call.tmDB(query).then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  })
}
