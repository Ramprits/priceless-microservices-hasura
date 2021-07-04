import { useState, createContext, useContext, useEffect } from "react";
import { addToLocalStorage } from "../utils";
import { getFromLocalStorage, history, removeFromLocalStorage } from "../utils";
const AuthContext = createContext("");
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const logout = () => {
    removeFromLocalStorage();
    history.push("/login");
  };
  const setCurrentUser = (user) => {
    setUser(user);
    addToLocalStorage(user);
  };

  useEffect(() => {
    if (getFromLocalStorage) {
      setUser(getFromLocalStorage);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
