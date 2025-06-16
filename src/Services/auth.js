import API from "../api";

const login = async (email,password) => {
    return API.post("/api/auth/login",{email,password})
}

export default login;