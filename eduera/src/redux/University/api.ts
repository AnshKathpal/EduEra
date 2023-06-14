import axios, { AxiosResponse } from "axios";
import { University } from "../../Constraints/types";
import { GET_UNIVERSITY_SUCCESS, POST_UNIVERSITY_SUCCESS , UNIVERSITY_ERROR, UNIVERSITY_REQUEST, EDIT_UNIVERSITY, DELETE_UNIVERSITY } from "./actionTypes";

let url = "http://localhost:8080"

// export const getUniversities = async() => async (dispatch : any) => {
// dispatch({type : "UNIVERSITY_REQUEST"})
// try {
//     let res :  AxiosResponse<University[]> = await axios.get(url)
//     return res.data;
// } catch (error) {
//     console.log(error);
//     dispatch({type : "UNIVERSITY_ERROR"})
// }
// }

export const getUniversities = async() => {
    try {
        let res :  AxiosResponse<University[]> = await axios.get(`${url}/universities`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
    }