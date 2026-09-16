import apiRequest from "./apiRequest.js";

const login = async (loginData) => {
  return await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(loginData),
  });
};

export default login;
