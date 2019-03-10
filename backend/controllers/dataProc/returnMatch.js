const surveyData = require("../utils/surveyData.json");
const genreIds = require("../utils/genreIds.json");

const MatchAnalysis = {
    matchIdentifier: (array1,array2) => {
        let alignedIndexes = []
        for(let i = 0; i < array1[0].length; i++){
            if(array2[0].includes(array1[0][i])){
                alignedIndexes.push(array1[0][i]);
            }
        }
        if(alignedIndexes.length === 1){
            return surveyData[0].answerOptions[alignedIndexes[0]]
        }
        else{
            let matchGenres = [];
            for(let j = 0; j < alignedIndexes.length; j ++){
                matchGenres.push(surveyData[0].answerOptions[alignedIndexes[j]]);
            }
            return matchGenres;
        }
    },
    queryBuilder: (genres) => {
            let idArr = []
            for (let index = 0; index < genreIds.genres.length; index++) {
                if(genres.includes(genreIds[index].name)){
                    idArr.push(genreIds[index].id)
                }
            }
            return idArr;
        }
}

module.exports = MatchAnalysis;