const db = require('../../db/Data');

const matchPromise = (email1,email2) => {
  new Promise ((resolve, reject) => {
    db.Users.findOne({ email: email1 }, 'movieSurvey').exec((err, data) =>{
      try {
        console.log("first movie survey:",data)
      } catch (err) {
        reject(console.error(err));
      } finally {
        resolve(console.log('completed promise'));
      }
    })
  })
}

// const movieMatchPromise = async () => {
//
// }
module.exports = matchPromise;
