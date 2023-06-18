import axios, { AxiosResponse } from "axios";
import { University, newUniversity, Programs } from "../../Constraints/types";
import { GET_PROGRAM_SUCCESS, POST_PROGRAM_SUCCESS , PROGRAM_ERROR, PROGRAM_REQUEST, EDIT_PROGRAM, DELETE_PROGRAM } from "./actionTypes";
import { Dispatch } from "redux";
import { NewDataType } from "../../Pages/Applied";




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

// export const getUniversities = async(getUniversityParam?: {
//   params: { country: string[], place : string[] };
// }) => {
//     try {
//         let res :  AxiosResponse<University[]> = await axios.get(`${url}/universities`,getUniversityParam)
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
//     }


    export const getPrograms = async(getProgramsParam?: {
      params: { country: string[], programType : string[] };
    }) => {
        try {
            let res :  AxiosResponse<Programs[]> = await axios.get(`${url}/programs`,getProgramsParam)
            return res.data;
        } catch (error) {
            console.log(error);
        }
        }

        export const addApplication = (newData:NewDataType) => {
            axios.post(`http://localhost:8080/applied`,newData).then((res)=>{
             return(res.data)
            }).catch((err)=>{
             console.log(err)
            })
         };

         export const getApplications = async () => {
            const response = await axios
              .get(`http://localhost:8080/applied`)
              .then((res) =>
              res.data)
              .catch((err) => {
                console.log(err);
                return null;
              });
          
            return response;
          };

          export const deleteProduct = async (id: number) => {
            try {
              const response = await axios.delete(`http://localhost:8080/applied/${id}`);
              return response.data;
            } catch (error) {
              throw new Error(`Failed to delete product: ${error}`);
            }
          };



    // export const postUniversities = (newUniversity : newUniversity) => (dispatch : Dispatch) => {
    //     dispatch({ type: UNIVERSITY_REQUEST });
    //     axios
    //       .post(`${url}/universities`, newUniversity)
    //       .then((res) => {
    //         dispatch({ type: POST_UNIVERSITY_SUCCESS, payload: res.data });
    //       })
    //       .catch((err) => {
    //         dispatch({ type: UNIVERSITY_ERROR });
    //       });
    //   };