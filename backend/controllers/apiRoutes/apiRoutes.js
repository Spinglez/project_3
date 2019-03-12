const db = require("../../db/Data");
const Call = require('../utils/Call');
const movieById = require('../utils/Call');
const movieByTitle = require('../utils/Call');
const matchAnalysis = require('../dataProc/returnMatch');

module.exports = app => {

  // Get request for all user info really only usefull for checking the db
  app.get('/api/Users', (req,res) => {
    db.Users.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  })

  // Get request for singular users
  app.get('/api/Users:User', (req,res) =>{
    db.Users.findOne({ email: req.params.User }, (err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    })
  })

  // get request for saved movies
  app.get('/api/savedmovies:user', (req,res)=>{
    db.SavedMovies.find({userId : req.params.user}, (err, data) =>{
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    })
  })

  // post request for saving movies.
  app.post('/api/savedmovies', (req,res)=>{
    let data = new db.SavedMovies()

    const { movieTitle, moviePoster, userId } = req.body

    if (!userId && userId !== 0 || !movieTitle || !moviePoster) {
      return res.json({ success: false, error: 'Invalid inputs missing fields'})
    }

    data.moviePoster = moviePoster;
    data.movieTitle = movieTitle;
    data.userId = userId;

    data.save(err => {
      console.log("data", data);
      if (err) throw err;
      return res.json({ success: true });
    });
  })

  // Post request to update  users data
  app.post('/api/Users:id', (req,res) => {
    let id = req.params.id;
    const { userDescription } = req.body;
    console.log(id, userDescription);
      db.Users.findByIdAndUpdate(id, { userDescription: userDescription }, (err,data) =>{
          if (err) throw err;
          return res.json({ success: true });
    })
  })

  // Creating a new user
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

  // End user <API>Routes</API>
  // Start Data Processing Routes

  // app.get('/api/test:', (req,res) => {
  //   matchPromise(req.params.email)
  // })

  app.post('/api/match', (req,res) => {
      let { email1, email2 } = req.body;
      const data  = [];
      let myPromise =
        new Promise((resolve, reject)=>{
          try {
            db.Users.findOne(
              {email: email1}).select('movieSurvey').lean().exec((err, res) => {
                if (err) return res.json({success: false, error: err});
                data.push(res);
                db.Users.findOne(
                  {email:email2}).select('movieSurvey').lean().exec((err, response) =>{
                    if (err) return res.json({succes: false, error: err})
                    data.push(response)
                    resolve(data)
                  })
                  // console.log(data);
              })
          } catch (error) {
            reject(error);
          }
        })

        // IN here is where we will run the data processing functions that are imported
      myPromise.then(result =>{
        console.log(result);
        let myresult = matchAnalysis.matchIdentifier(result[0].movieSurvey,result[1].movieSurvey);
        console.log(matchAnalysis.queryBuilder(myresult))
        // use result[0] and result[1] to pass through the array of arrays return the data through res.json
        res.json({success: true})
      });

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

    // movieByTitle function accepts a string
    movieByTitle().then(response => {
      console.log(response.data);
      // return res.json(response.data);
    })
    .catch(err => {
      console.error(err);
    })

  })
}
