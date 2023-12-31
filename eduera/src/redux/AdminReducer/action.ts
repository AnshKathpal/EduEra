// import React from "react";
// import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS } from "./actionTypes";
// import axios from "axios";

// const baseURL = "/admin";

// export const getProduct = (dispatch) => {
//   dispatch({ type: PRODUCT_REQUEST });
//   axios
//     .get(baseURL)
//     .then((res) => {
//       dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };

// export const addProduct = (data) => (dispatch) => {
//   dispatch({ type: PRODUCT_REQUEST });

//   axios
//     .post(baseURL, data)
//     .then((res) => {
//       dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };

// export const editProduct = (id, data) => (dispatch) => {
//   dispatch({ type: PRODUCT_REQUEST });

//   axios
//     .put(`${baseURL}/${id}`, data)
//     .then((res) => {
//       dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };

import { Dispatch, AnyAction } from 'redux';
import axios from 'axios';

import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
} from './actionTypes';

const baseURL = 'https://json-server-b26.onrender.com/universities';

export const getProduct = (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(baseURL)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

// export const addProduct = (data: any) => (dispatch: Dispatch<AnyAction> ) => {
//   dispatch({ type: PRODUCT_REQUEST });

//   axios
//     .post(`http://localhost:8080/universities`, data)
//     .then((res) => {
//       dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };
// export const addProduct = ({ data }: { data: any }) => (dispatch: Dispatch<AnyAction>) => {
//   dispatch({ type: PRODUCT_REQUEST });

//   axios
//     .post(`http://localhost:8080/universities`, data)
//     .then((res) => {
//       dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
//     })
//     .catch(() => {
//       dispatch({ type: PRODUCT_FAILURE });
//     });
// };


export const addProduct = (data: any) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .post(`https://json-server-b26.onrender.com/universities`, data)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};


export const editProduct = (id: string, data: any) => (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .put(`${baseURL}/${id}`, data)
    .then((res) => {
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};


export interface LoginAction {
  type: 'LOGIN';
  payload: {
    username: string;
    password: string;
  };
}

export interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

export const login = (username: string, password: string): LoginAction => {
  return {
    type: 'LOGIN',
    payload: { username, password }
  };
};

export const logout = (): LogoutAction => {
  return {
    type: 'LOGOUT'
  };
};

