import type RegisterData from "@/models/RegisterData"
import apiClient from "@/config/ApiClient"

//Register Function
export const registerUser = async (signUpData: RegisterData) =>{
    //API call to server to save data 

    const response = await apiClient.post(`/auth/register`,signUpData);
    return response.data;
};

//Login

//Get Current Login User


//Refresh Token 

//apis