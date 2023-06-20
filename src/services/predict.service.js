import axios from "axios";

import { domain } from "../constants";

export const predictImage = async (file) => {
  const formData = new FormData();
  formData.append("file_uploaded", file);
  try {
    const response = await axios.post(`${domain}/predict/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Handle the response data here
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error(error);
    return null;
  }
};
