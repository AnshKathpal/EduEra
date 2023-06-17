import axios, { AxiosResponse } from "axios";
import {Programs } from "../../Constraints/types";
import { GET_PROGRAM_SUCCESS, POST_PROGRAM_SUCCESS , PROGRAM_ERROR, PROGRAM_REQUEST, EDIT_PROGRAM, DELETE_PROGRAM } from "./actionTypes";
import { Dispatch } from "redux";




let url = "http://localhost:8080"

    export const getPrograms = async(getProgramsParam?: {
      params: { country: string[], programType : string[] };
    }) => {
        try {
            let res :  AxiosResponse<Programs[]> = await axios.get(`${url}/programs`,getProgramsParam)
            return res.data;
        } catch (error) {
            console.log(error);
        }
        }