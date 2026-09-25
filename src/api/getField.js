import apiRequest from "./apiRequest.js";

const getField = async () => {
  return await apiRequest("/field");
};

export default getField;
