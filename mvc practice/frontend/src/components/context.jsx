import { useState } from "react";
import { createContext } from "react";

export const homeContext = createContext();
export default function Homeprovider({ children }) {
  const [currentUser, iscurrentUser] = useState([]);

  return (
    <>
      <homeContext.Provider value={{ currentUser, iscurrentUser }}>
        {children}
      </homeContext.Provider>
    </>
  );
}
