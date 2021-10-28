import axios from "axios";

const QuizzR = "http://localhost:8080/api/quizzs/current";
const GameR = "http://localhost:8080/api/games";

class QuizzService {
    getQuizzOfTheWeek(){
        return axios.get(QuizzR)
    }

    playQuizz({objectQuestion, objectReponse, objectPlayer}){
        return axios.post(GameR,
            {
                quizz:objectQuestion,
                response:objectReponse,
                player: objectPlayer
            })
    }
}

export default new QuizzService();