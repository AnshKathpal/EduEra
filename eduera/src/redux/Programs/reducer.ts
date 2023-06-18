import {
  GET_PROGRAM_SUCCESS,
  POST_PROGRAM_SUCCESS,
  PROGRAM_ERROR,
  PROGRAM_REQUEST,
  EDIT_PROGRAM,
  DELETE_PROGRAM,
} from "./actionTypes";
import { AppAction } from "./action";
import { University, Programs } from "../../Constraints/types";

export interface IProgramState {
  loading: boolean;
  error: boolean;
  data: Programs[];
}

const initialState : IProgramState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (
  oldState: IProgramState = initialState,
  action: AppAction
): IProgramState => {
  const { type } = action;

  switch (type) {
    case PROGRAM_REQUEST:
      return { ...oldState, loading: true };
    case PROGRAM_ERROR:
      return { ...oldState, loading: false, error: true };
    case GET_PROGRAM_SUCCESS:
      return { ...oldState, loading: false, data: action.payload };
    // case POST_UNIVERSITY_SUCCESS:
    //   return { ...oldState, loading: false, data: [...oldState.data, action.payload] };
    default:
      return oldState;
  }
};
