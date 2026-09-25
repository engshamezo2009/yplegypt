import apiRequest from "./apiRequest.js";

const claimField = async (data) => {
  return await apiRequest("/field/claim", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export default claimField;
