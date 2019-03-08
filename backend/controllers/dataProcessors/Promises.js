const db = require('../../db/Data');

const matchPromise = () => {
  new Promise ((resolve, reject) => {
    db.Users.findOne({ email: email1 }, 'movieSurvey').exec((err, survey) =>{
      if (err) throw console.error(err);
      console.log(survey);
    })
  })
}

// const movieMatchPromise = async () => {
//
// }
module.exports = matchPromise;
