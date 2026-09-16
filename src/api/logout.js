import apiRequest from "./apiRequest.js";

const logout = async () => {
  return await apiRequest("/auth/logout", {
    method: "POST",
  });
};

export default logout;
