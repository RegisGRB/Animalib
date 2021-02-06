import axios from "axios";
import auth from "../utils/Auth";

const headers = {
    "Content-Type": "application/json",
};

const API_URL = "https://animalib.herokuapp.com/api/v1";

const AuthService = {
    login: (data) => {
        console.log(data);
        axios({
            method: 'post',
            url: `${API_URL}/auth/login`,
            data: {
                email: data.LEmail.value,
                password: data.LPassword.value
            }
        })
            .then(res => {
                return auth.setUser(res.data.user);
            })
            .catch(err => {
                return err.response.data.error;
            });
    },
    register: (data) => {
        console.log(data);
        axios({
            method: 'post',
            url: `${API_URL}/auth/register`,
            data: {
                email: data.REmail.value,
                password: data.RPassword.value,
                firstname: data.RFirstName.value,
                lastname: data.RLastName.value,
            }
        })
            .then()
            .catch()
    },
};

export default AuthService;