import {
  REGISTER_FOR_EVENT,
  REGISTER_FOR_EVENT_SUCCESS,
  REGISTER_FOR_EVENT_FAILED
} from "./types";
import EventService from "../../services/EventService";

export const register = (data) => {
  return async (dispatch) => {



    dispatch({ type: REGISTER_FOR_EVENT });

    EventService.register(data).then(response => {
      dispatch({ type: REGISTER_FOR_EVENT_SUCCESS, payload: response });
      //openSnackbar(({ message: "Dodano pracownika", variant: "success" }));

    }).catch(err => {
      dispatch({ type: REGISTER_FOR_EVENT_FAILED, payload: err });
   
      //openSnackbar(({ message: err.response.data.message, variant: "error" }));
    });

  };
};