import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZuxFRf4NMLXfzodINso_cqqE_dM-s3gJO1oZVYW0-_c",
  },
});
