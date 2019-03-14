import { Personas } from '../data/personas';

export const profileAnalysis = {
    movieType: surveyResponses => {
        let likeSet = surveyResponses[0][0];
        let dislikeSet = surveyResponses[0][1];
        let heartRace = surveyResponses[0][4];
        let heartRaceSelection = []
        let visualsSelection = []
        let visuals = surveyResponses[0][3];
        for(let k = 0; k < heartRace.length; k++){
            if(heartRace[k]){
                heartRaceSelection.push(k);
            }
            if(visuals[k]){
                visualsSelection.push(k);
            }
        }
        if (dislikeSet.length === 0) {
            return "Equal Opportunity Watcher"
        }
        else {
            let personaArr = [];
            for (let i = 0; i < likeSet.length; i++) {
                for (let j = 0; j < Personas.length; j++) {
                    if(likeSet[i]){
                    if (Personas[j].likes.includes(i)) {
                        if(!personaArr.includes(Personas[j].name)){
                            personaArr.push(Personas[j].name);
                        }
                    }
                }
                }
            }
        if (personaArr.length > 1) {
            if (personaArr.includes("Studious Viewer")) {
                if (!personaArr.includes("Action Seeker") || !personaArr.includes("Hopeless Romantic")){
                    return ["Studious Viewer", "As a studious viewer, you are fascinated by movies about personal stories and experiences that people went through. You mentioned that you like documentaries, and this resonates strongly with this type."]
                }
            }
            if (personaArr.includes("Hopeless Romantic")) {
                if (heartRaceSelection.includes(1)) {
                    return ["Hopeless Romantic", "A hopeless romantic. Your heart not only races in kissing scenes, but you even in movies involving any general kind of romance."]
                }
            }
            if (personaArr.includes("Action Seeker")) {
                if (heartRaceSelection.includes(2) || heartRace.includes(3)) {
                    return ["Action Seeker", "As an action seeker, your heart is ignited by the visuals associated with intense fights, skydiving scenes, and anything intense. You're essentially an adrenaline junky."]
                }
            }
            if (personaArr.includes("Lover of Darkness")) {
                if (visualsSelection.includes(2)) {
                    return ["Lover of Darkness","You're dark. From bloodshed to jumping scences, you simply can't get enough of it. Horror ignites your fire for movie watching - let's just hope your date feels the same way."]
                }
            }
            if (personaArr.includes("Futuristic")) {
                if (visualsSelection.includes(0)) {
                    return ["Futuristic", "Weaboo? Simple CGI lover? Both? You love animation and sci-fi movies. The future is whatever you make it, and your mind is the only thing limiting you from endless creativity."]
                }
            }
            if (personaArr.includes("Entertainee")) {
                if (visualsSelection.includes(3)) {
                    return ["Entertainee", "As an Entertainee, anything funny or provacative is your potion. You're a lover of comedies and a good time, and this naturally resonates with your typical movie selections."]
                }
            }
        }
        else {
            return [personaArr[0], "While this personality may describe you well, let's go ahead and take a look at what your date ends up with so we can craft your selection more accurately."];
        }
    }
}
}

