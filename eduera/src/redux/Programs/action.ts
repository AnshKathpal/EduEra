import { Programs } from "../../Constraints/types";
import { AppDispatch } from "../store";
// import { getUniversities, postUniversities } from "./api";
import { getPrograms } from "./api";
import * as types from "./actionTypes";


export interface IProgramRequest {
  type: typeof types.PROGRAM_REQUEST;
}

export interface IProgramError {
  type: typeof types.PROGRAM_ERROR;
}

export interface IGetProgramSuccess {
  type: typeof types.GET_PROGRAM_SUCCESS;
  payload: Programs[];
}



export type AppAction =
  | IProgramRequest
  | IProgramError
  | IGetProgramSuccess

  const programRequest = (): IProgramRequest => {
    return {type :  types.PROGRAM_REQUEST}
  }

  const programError = (): IProgramError => {
    return {type :  types.PROGRAM_ERROR}
  }

const getProgramSuccess = (data : Programs[]): IGetProgramSuccess =>{
    return {type : types.GET_PROGRAM_SUCCESS, payload : data}
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

  
export const getProgram = (getProgramParam?: { params: { country: string[] , programType : string[] } }) : any => 
    async (dispatch : AppDispatch) => {
        dispatch(programRequest());
        try {
            let data = await getPrograms(getProgramParam)
            if(data){
                dispatch(getProgramSuccess(data));
            }
        } catch (error) {
            dispatch(programError());
        }
    }