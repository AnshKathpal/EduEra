import React from "react";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

const baseURL = "https://mu9umx-8080.csb.app/admin";

export const getProduct = (dispatch) => {
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

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .post(baseURL, data)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const editProduct = (id, data) => (dispatch) => {
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
