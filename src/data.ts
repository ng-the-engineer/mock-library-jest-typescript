import axios from "axios";

export const fetch = async () =>
  await axios.get("https://api.spacexdata.com/v4/launches/latest");
