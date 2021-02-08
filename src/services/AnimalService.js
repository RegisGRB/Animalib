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
    fetchAnimal: (id) => {
        return axios({
            method: 'get',
            url: `${API_URL}/animal/${id}`,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": Auth.getToken()
            }
        });
    },
    addAnimal: (data) => {
        return axios({
            method: 'post',
            url: `${API_URL}/animals/`,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": Auth.getToken()
            },
            data: {
                id_owner: Auth.getUser()._id,
                name: data.AName.value,
                sex: data.ASelect.value,
                type: data.AType.value,
                race: data.ARace.value,
                dob: data.ADob.value,
                color: data.Acolor.value,
                weight: data.APoids.value,
                sterile: data.ASterile.checked,
                puce_id: data.APuce_id.value
            }
        })
    },
    editAnimal: (data, id_animal) => {
        return axios({
            method: 'patch',
            url: `${API_URL}/animal/${id_animal}`,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": Auth.getToken()
            },
            data: {
                _id: id_animal,
                id_owner: Auth.getUser()._id,
                name: data.AName.value,
                sex: data.ASelect.value,
                race: data.ARace.value,
                dob: data.ADob.value,
                color: data.Acolor.value,
                weight: data.APoids.value,
                sterile: data.ASterile.checked,
                puce_id: data.APuce_id.value
            }
        })
    },
    deleteAnimal: (id_animal) => {
        return axios({
            method: "delete",
            url: `${API_URL}/animal/${id_animal}`,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": Auth.getToken()
            },
        });
    }
};

export default AnimalService;