import { STORE_PLACES } from "./types";
import axios from "axios"

export const storePlaces = data => async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("API_HERE", data, config);
      dispatch({
        type: STORE_PLACES,
        payload: res.data
      });

    } catch (err) {
    }
  };