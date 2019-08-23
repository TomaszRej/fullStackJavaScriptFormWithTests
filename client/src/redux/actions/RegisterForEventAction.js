import {
  REGISTER_FOR_EVENT,
  REGISTER_FOR_EVENT_SUCCESS,
  REGISTER_FOR_EVENT_FAILED
} from "./types";
import EventService from "../../services/EventService";

export const register = (data, succeded, failed) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_FOR_EVENT });

    EventService.register(data).then(response => {
      dispatch({ type: REGISTER_FOR_EVENT_SUCCESS, payload: response });
      typeof succeded === "function" && succeded();

    }).catch(err => {
      dispatch({ type: REGISTER_FOR_EVENT_FAILED, payload: err.message });
      typeof failed === "function" && failed(err.message);
    });

  };
};