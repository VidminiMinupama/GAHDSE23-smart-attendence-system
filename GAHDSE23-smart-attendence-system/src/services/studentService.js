import API from "./API";    

export const studentLogin = async (data) => {
    const responce= await API.post("student/login", data);
    return responce.data;
}

