import axios from "axios";

const register = (data) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/registerForEvent/",
    data: data
  })
};

export default {
  register
}