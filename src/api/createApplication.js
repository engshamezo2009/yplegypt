import apiRequest from "./apiRequest.js";

const createApplication = async (applicationData) => {
  return await apiRequest("/applications", {
    method: "POST",
    body: JSON.stringify(applicationData),
  });
};

export default createApplication;
