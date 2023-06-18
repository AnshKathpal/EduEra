import axios from "axios";

import { NewDataType } from "../../Pages/AdminPages/AdminNewUser";



export const addProduct = (newData:NewDataType) => {
axios.post(`http://localhost:8080/universities`,newData).then((res)=>{
    return(res.data)
   }).catch((err)=>{
    console.log(err)
   })
};

export const deleteProduct = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/universities/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete product: ${error}`);
    }
  };

























