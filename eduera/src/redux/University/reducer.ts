import { GET_UNIVERSITY_SUCCESS, POST_UNIVERSITY_SUCCESS , UNIVERSITY_ERROR, UNIVERSITY_REQUEST, EDIT_UNIVERSITY, DELETE_UNIVERSITY } from "./actionTypes";
import { AppAction } from "./action";
import { University } from "../../Constraints/types";

export interface IUniversityState {
  loading: boolean;
  error: boolean;
  data: University[];
};

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (
  oldState: IUniversityState = initialState,
  action: AppAction
): IUniversityState => {
  const { type } = action;

  switch (type) {
    case UNIVERSITY_REQUEST:
      return { ...oldState, loading: true }
    case UNIVERSITY_ERROR:
      return { ...oldState, loading: false, error: true }
    case GET_UNIVERSITY_SUCCESS:
      return { ...oldState, loading: false, data: action.payload }
    default:
      return oldState;
  }
};