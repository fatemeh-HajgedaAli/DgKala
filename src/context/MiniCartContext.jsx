import { createContext, useContext, useState } from "react";

const MiniCartContext = createContext();

export function MiniCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MiniCartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MiniCartContext.Provider>
  );
}

export function useMiniCart() {
  return useContext(MiniCartContext);
}
