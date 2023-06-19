import axios from "axios";

import { NewDataType } from "../../Pages/AdminPages/AdminNewUser";



export const addProduct = (newData:NewDataType) => {
axios.post(`https://json-server-b26.onrender.com/universities`,newData).then((res)=>{
    return(res.data)
   }).catch((err)=>{
    console.log(err)
   })
};

export const deleteProduct = async (id: number) => {
    try {
      const response = await axios.delete(`https://json-server-b26.onrender.com/universities/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete product: ${error}`);
    }
  };

























