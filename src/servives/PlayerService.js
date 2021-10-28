import axios from "axios";
import { toast } from "react-toastify";

const PlayerUrl = "http://localhost:8080/api/players";

class UserService {
    getUsers(){
        return axios.get(PlayerUrl);
    }

    async createUser(number){
        
        try {
            const response = await axios.post(PlayerUrl,
                {
                   "number" : number
               });
               console.log(response);
            return 0;
        } catch (error) {
            if (error.response) { // get response with a status code not in range 2xx
                console.log(error.response.data);
                
                console.log('Error', error.response.data.message);
                console.log(error.response.status);
                console.log(error.response.headers);
               return error.response.data.message;
              } else if (error.request) { // no response
                console.log(error.request);
              } else { // Something wrong in setting up the request
                console.log('Error', error.message);
                alert(error.message);
              }
              console.log(error.config);
        }
        return 2;
    }
}

export default new UserService();