const surveyData = require("../utils/surveyData.json");
const genreIds = require("../utils/genreIds.json");

const MatchAnalysis = {
    matchIdentifier: (array1,array2) => {
        console.log(array1,array2)
        let alignedGenres = [];
        let dislikeGenreOverlap = [];
        // loop through question 1 answers
        for(let i = 0; i < array1[0].length; i++){
                // if responses the same
                if(array1[0][i] === array2[0][i]){
                    // if both responses true
                    if(array1[0][i]){
                        alignedGenres.push(surveyData[0].answerOptions[i]);
                    }
                    // if both responses false
                    else{
                    dislikeGenreOverlap.push(surveyData[0].answerOptions[i]);
                    }
                }
            }
            console.log("ALIGNED:",alignedGenres)
            // after the loop, if aligned Genres empty, populate it with non-dislike genres
            if(alignedGenres.length === 0){
                let options = surveyData[0].answerOptions;
                let alternateOptionSet = [];
                while(alternateOptionSet.length <= 3){
                    options.map(option => {
                        if(!dislikeGenreOverlap.includes(option)){
                            alternateOptionSet.push(option)
                        }
                    })
                }
                console.log("SCARCITY CASE:", alignedGenres)
                alignedGenres = alternateOptionSet; 
            }
            return alignedGenres;
    },
    queryBuilder: (genres) => {
            let idArr = []
            for (let index = 0; index < genreIds.genres.length; index++) {
                if(genres.includes(genreIds.genres[index].name)){
                    idArr.push(genreIds.genres[index].id)
                }
            }
            return idArr;
        }
}

module.exports = MatchAnalysis;
