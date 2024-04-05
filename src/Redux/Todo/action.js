import { ALLDATA } from "./actionitems";
import axios from "axios"

export function getalldata(val) {

    return { type: ALLDATA, payload: val }
}



export const todoAllData = async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: "http://localhost:3000/todos",
      });
      dispatch(getalldata(data));
    } catch (error) {
      console.log(error);
    }
  };