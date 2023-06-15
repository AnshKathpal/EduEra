import { University } from "../../Constraints/types";
import { AppDispatch } from "../store";
import { getUniversities, postUniversities } from "./api";
import * as types from "./actionTypes";

export interface IUniversityRequest {
  type: typeof types.UNIVERSITY_REQUEST;
}

export interface IUniversityError {
  type: typeof types.UNIVERSITY_ERROR;
}

export interface IGetUniversitySuccess {
  type: typeof types.GET_UNIVERSITY_SUCCESS;
  payload: University[];
}

export type AppAction =
  | IUniversityRequest
  | IUniversityError
  | IGetUniversitySuccess;

  const universityRequest = (): IUniversityRequest => {
    return {type :  types.UNIVERSITY_REQUEST}
  }

  const universityError = (): IUniversityError => {
    return {type :  types.UNIVERSITY_ERROR}
  }

const getUniversitySuccess = (data : University[]): IGetUniversitySuccess =>{
    return {type : types.GET_UNIVERSITY_SUCCESS, payload : data}
}


// const postUniversity = (university: University) =>
//   async (dispatch: AppDispatch) => {
//     dispatch(universityRequest());
//     try {
//       const response = await postUniversity(university);
//       const data = response.data; // Modify this line based on the structure of the response
//       dispatch(getUniversitySuccess(data));
//     } catch (error) {
//       dispatch(universityError());
//     }
// };

  
export const getUniversity = (getUniversityParam?: { params: { country: string[] } }) : any => 
    async (dispatch : AppDispatch) => {
        dispatch(universityRequest());
        try {
            let data = await getUniversities(getUniversityParam)
            if(data){
                dispatch(getUniversitySuccess(data));
            }
        } catch (error) {
            dispatch(universityError());
        }
    }