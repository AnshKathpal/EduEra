import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: true, isError: false };
    case EDIT_PRODUCT_SUCCESS:
      const editedProductIndex = state.products.findIndex((product) => product.id === payload.id);
      const editedProductList = [...state.products];
      editedProductList[editedProductIndex] = payload;
      return { ...state, isLoading: false, products: editedProductList };
    case PRODUCT_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
