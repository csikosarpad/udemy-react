import axios from "axios";

const KEY = "AIzaSyCVs53KOPUt_qeH9kinIQhq1VZkSfN6s3I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
