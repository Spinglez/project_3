import { Personas } from '../data/personas';

export const profileAnalysis = {
    movieType: surveyResponses => {
        let likeSet = surveyResponses[0];
        let dislikeSet = surveyResponses[1];
        let heartRace = surveyResponses[4];
        let visuals = surveyResponses[3];
        if(dislikeSet.length === 0){
            return "Equal Opportunity Watcher"
        }
        else{
            let personaArr = []
            for(let i = 0; i < likeSet.length; i++){
                for(let j = 0; j < Personas.length; j++){
                    if(likeSet[i] in Personas[j].likes){
                        personaArr.push(Personas[j].name);
                    }
                }
            }
            if(personaArr.length > 1){
                if("Hopeless Romantic" in personaArr){
                    if(1 in heartRace){
                        return "Hopeless Romantic"
                    }
                }
                if("Lover of Darkness" in personaArr){
                    if(2 in visuals){
                        return "Lover of Darkness"
                    }
                }
                if("Futuristic" in personaArr){
                    if(0 in visuals){
                        return "Futuristic"
                    }
                }
                if("Action Seeker" in personaArr){
                    
                }
            }
            return personaArr;
            }
    }
}

