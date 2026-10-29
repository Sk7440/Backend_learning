import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom"
export const homeContext = createContext();

export default function Homeprovider({ children }) {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/")
  };

  return (
    <homeContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </homeContext.Provider>
  );
}