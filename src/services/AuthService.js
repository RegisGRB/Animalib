import axios from "axios";
import auth from "../utils/Auth";

const API_URL = "https://animalib.herokuapp.com/api/v1";

const AuthService = {
    login: (data) => {
        axios({
            method: 'post',
            url: `${API_URL}/auth/login`,
            data: {
                email: data.LEmail.value,
                password: data.LPassword.value
            },
            headers: {
                "Content-Type": "application/json",
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
        axios({
            method: 'post',
            url: `${API_URL}/auth/register`,
            data: {
                email: data.REmail.value,
                password: data.RPassword.value,
                firstname: data.RFirstName.value,
                lastname: data.RLastName.value,
            },
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                return auth.setUser(res.data.user);
            })
            .catch(err => {
                return err;
            });
    },
    update: (data) => {
        let user = {};
        if(!data.RPassword.value) {
            user = {
                email: data.REmail.value,
                firstname: data.RFirstName.value,
                lastname: data.RLastName.value,
            }
        } else {
            user = {
                email: data.REmail.value,
                firstname: data.RFirstName.value,
                lastname: data.RLastName.value,
                password: data.RPassword.value,
            }
        }

        axios({
            method: 'patch',
            url: `${API_URL}/user/${auth.getUser()._id}`,
            data: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "x-access-token": auth.getToken()
            }
        })
            .then(res => {
                const user = {
                    _id: res.data._id,
                    email: res.data.email,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    token: auth.getToken(),
                }
                return auth.setUser(user);
            })
            .catch(err => {
                return err;
            });
    }
};

export default AuthService;