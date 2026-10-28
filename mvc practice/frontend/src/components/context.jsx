import { useState } from "react";
import { createContext } from "react";

export  const homeContext = createContext()
export default function Homeprovider({ children }) {
  const [count,setCount]=useState(0)
  return (
    <>
    
    <homeContext.Provider value={{count,setCount }}>
      {children}
    </homeContext.Provider>
    </>
  )
}