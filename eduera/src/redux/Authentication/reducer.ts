import { LoginData } from "../../Constraints/types";
import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESSFUL } from "./actionType";
import { AuthAction } from "./action";

export interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  isRegistered: boolean;
  users: LoginData[];
  isError: boolean;
}

const initialState = {
  isLoading: false,
  isAuth: false,
  isRegistered: false,
  users: new Array(),
  isError: false,
};

export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case REGISTER_USER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REGISTER_USER_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
        isAuth: true,
        users: [...state.users, action.payload],
      };
    }

    case REGISTER_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: true,
      };
    }
    default:
      return state;

  }
}

// import { AuthAction } from "./action";
// import * as types from "./actionType";

// export interface AuthState {
//   loading: boolean;
//   error: boolean;
//   isAuth: boolean;
//   token: string;
// }

// const initialState = {
//   loading: false,
//   error: false,
//   isAuth: false,
//   token: "",
// };

// const reducer = (
//   oldState: AuthState = initialState,
//   action: AuthAction
// ): AuthState => {
//   const { type } = action;

//   switch (type) {
//     case types.USER_LOGIN_REQUEST:
//       return { ...oldState, loading: true };
//     case types.USER_LOGIN_SUCCESS:
//       return {
//         ...oldState,
//         loading: false,
//         isAuth: true,
//         token: action.payload,
//       };
//     case types.USER_LOGIN_ERROR:
//       return { ...oldState, loading: false, error: true };
//     default:
//       return oldState;
//   }
// };

// export { reducer };
