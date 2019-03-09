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

    const { token, firstName, lastName, email, movieSurvey, userDescription } = req.body;

    if ((!token && token !== 0) || !movieSurvey || !email) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    data.email = email;
    data.movieSurvey = req.body.movieSurvey;
    data.userDescription = userDescription;
    data.token = token;
    data.save(err => {
      if (err) throw err;
      return res.json();
    });
  })
  
  app.post('/api/Users/SavedMovies', (req, res) =>{
    let data = new db.SavedMovies();

    console.log("req.body", req.body);

    const { moviePoster, movieTitle } = req.body;
    const users = req.body['users._id'] 

    console.log(movieTitle);

    if (!movieTitle || !moviePoster || !users) 
      {
        return res.json({
          success: false,
          error: "MOVIE TITLE, POSTER, OR USER ID MISSING"
        })
      }

      data.moviePoster = moviePoster;
      data.movieTitle = movieTitle;
      data.users = users;
      data.save(err => {
        console.log("data", data)
        if (err) throw err;
        return res.json({ success: true });
      })
      db.Users
        .findOne({ users: users._id })
        .populate( "SavedMovies" )
    })

  // End user <API>Routes</API>
  // Start Data Processing Routes

  // app.get('/api/test:', (req,res) => {
  //   matchPromise(req.params.email)
  // })

  app.post('/api/match', (req,res) => {
      let { email1, email2 } = req.body;
      // dataProc.Match(email1, email2)
      console.log(email1,email2);
  })

  app.get('/api/call:call', (req,res) =>{
    let query = req.params.call
    // let query = 'action';
    Call.tmDB(query).then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      console.error(err);
    })

    // let query = 'Titanic';
    Call.omDB(query).then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      console.error(err);
    })

    // movieById function accepts an imdb movie ID 
    movieById().then(response => {
      console.log(response.data);
      // return res.json(response.data);
    })
    .catch(err => {
      console.error(err);
    })

    // // movieByTitle function accepts a string
    // movieByTitle().then(response => {
    //   console.log(response.data);
    //   // return res.json(response.data);
    // })
    // .catch(err => {
    //   console.error(err);
    // })
    
  })
}
