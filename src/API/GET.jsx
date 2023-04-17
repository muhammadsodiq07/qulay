import axios from "axios";

const headers = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

const GET = {
  getDate: (location) => axios.get(location, headers),
};

export default GET;
