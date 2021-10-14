import axios from "axios"; //use to make an http request

//Redux types
import {GET_IMAGE} from "./Image.type";

export const getImage = (_id) => async(dispatch) => {
    try{
        const Image = await axios({
            method: "GET",
            url: `https://localhost:4000/image/${_id}`,
        });
        return dispatch({type: GET_IMAGE, payload: Image.data});
    } catch(error){
        return dispatch({type: "ERROR", payload: error});
    }
    


};

