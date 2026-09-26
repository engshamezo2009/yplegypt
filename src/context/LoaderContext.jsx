import { createContext, useContext, useState } from "react";

const LoaderContext = createContext(null);

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
