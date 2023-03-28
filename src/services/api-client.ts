import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3f9b3e02b2e44813ba2f0bf10a976994",
  },
});
