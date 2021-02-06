import axios from "axios";
import Auth from "../utils/Auth";

const API_URL = "https://animalib.herokuapp.com/api/v1";

const AnimalService = {
    fetchUserAnimal: (owner_id) => {
        return axios({
            method: 'get',
            url: `${API_URL}/animal/owner/${owner_id}`,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": Auth.getToken()
            }
        });
    },
};

export default AnimalService;