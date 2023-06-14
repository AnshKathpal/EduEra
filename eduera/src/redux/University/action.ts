import { University } from "../../Constraints/types";
import { AppDispatch } from "../store";
import { getUniversities } from "./api";
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

export const getUniversity = () => 
    async (dispatch : AppDispatch) => {
        dispatch(universityRequest());
        try {
            let data = await getUniversities()
            if(data){
                dispatch(getUniversitySuccess(data));
            }
        } catch (error) {
            dispatch(universityError());
        }
    }