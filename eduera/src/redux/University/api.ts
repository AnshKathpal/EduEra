import axios, { AxiosResponse } from "axios";
import { University, newUniversity } from "../../Constraints/types";
import { GET_UNIVERSITY_SUCCESS, POST_UNIVERSITY_SUCCESS , UNIVERSITY_ERROR, UNIVERSITY_REQUEST, EDIT_UNIVERSITY, DELETE_UNIVERSITY } from "./actionTypes";
import { Dispatch } from "redux";




let url = "https://json-server-b26.onrender.com"

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

export const getUniversities = async(getUniversityParam?: {
  params: { country: string[], place : string[] };
}) => {
    try {
        let res :  AxiosResponse<University[]> = await axios.get(`${url}/universities`,getUniversityParam)
        return res.data;
    } catch (error) {
        console.log(error);
    }
    }


    // export const getPrograms = async(getProgramsParam?: {
    //   params: { country: string[], programType : string[] };
    // }) => {
    //     try {
    //         let res :  AxiosResponse<University[]> = await axios.get(`${url}/programs`,getProgramsParam)
    //         return res.data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     }




    export const postUniversities = (newUniversity : newUniversity) => (dispatch : Dispatch) => {
        dispatch({ type: UNIVERSITY_REQUEST });
        axios
          .post(`${url}/universities`, newUniversity)
          .then((res) => {
            dispatch({ type: POST_UNIVERSITY_SUCCESS, payload: res.data });
          })
          .catch((err) => {
            dispatch({ type: UNIVERSITY_ERROR });
          });
      };