const db = require("../../db/Data");
const Call = require('../utils/Call');
const movieById = require('../utils/Call');
const movieByTitle = require('../utils/Call');
const matchAnalysis = require('../dataProc/returnMatch');
const unirest =  require('unirest')

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

    console.log(req.body.parameters.savedMovie);

    const { title, overview, image, userId, voteScore } = req.body.parameters.savedMovie

      console.log(title, image);
    if (!userId && userId !== 0 || !title || !image) {
      return res.json({ success: false, error: 'Invalid inputs missing fields'})
    }

    data.moviePoster = image;
    data.movieTitle = title;
    data.overview = overview;
    data.userId = userId;
    data.voteScore = voteScore;

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

    const { firstName, lastName, email, movieSurvey, image } = req.body;

    if (!movieSurvey || !email) {
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    }
    data.firstName = firstName;
    data.lastName = lastName;
    data.email = email;
    data.movieSurvey = movieSurvey;
    data.image = image;
    data.save(err => {
      if (err) throw err;
      return res.json();
    });
  })

  app.post('/api/Users/savedmovies', (req, res) =>{
    let data = new db.SavedMovies();

    console.log("req.body", req.body);

    const { moviePoster, movieTitle } = req.body;
    const userId = req.body['userId']

    console.log('Movie Title', movieTitle);

    if (!movieTitle || !moviePoster || !userId)
      {
        return res.json({
          success: false,
          error: "MOVIE TITLE, POSTER, OR USER ID MISSING"
        })
      }

    data.moviePoster = moviePoster;
    data.movieTitle = movieTitle;
    data.userId = userId;

    data.save(err => {
      console.log("data", data)
      if (err) throw err;
      return res.json({ success: true });
      })

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
        let firstRes = result[0].movieSurvey
        let secondRes = result[1].movieSurvey
        let myresult = matchAnalysis.matchIdentifier(firstRes, secondRes);
        console.log(firstRes,secondRes);
        console.log("BACKEND ANALYSIS OUTPUT:", myresult);
        let matchGenres = matchAnalysis.queryBuilder(myresult)
        let stringQuery = matchGenres.toString();
        Call.tmDB(stringQuery).then(response =>{
          // console.log(response.data.results);
          return res.json({success: true, data: response.data.results})
        });
      })
  });

  app.get('/api/availability:title', (req,res) =>{
    let query = req.params.title
    Call.uni(query).end((result, err) =>{
      if (err) throw console.error(err);
      console.log(result.status, result.headers, result.body);
      return res.json({data: result.body})
    })
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
