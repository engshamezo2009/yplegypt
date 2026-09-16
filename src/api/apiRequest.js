const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        error: data.error || "SERVER_ERROR",
      };
    }

    return data;
  } catch (error) {
    if (error.status && error.error) {
      throw error;
    }

    throw {
      status: 0,
      error: "NETWORK_ERROR",
    };
  }
};

export default apiRequest;
