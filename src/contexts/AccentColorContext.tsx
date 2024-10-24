import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AccentColorContextType = {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
};
export const AccentColorContext = createContext<AccentColorContextType>({
  accentColor: "blue",
  setAccentColor: () => {},
});

interface AccentColorProviderProps {
  children: ReactNode;
}
export default function AccentColorProvider({
  children,
}: AccentColorProviderProps) {
  const prevAccentColor = localStorage.getItem("accent-color");
  const [accentColor, setAccentColor] = useState(
    prevAccentColor ? prevAccentColor : "blue"
  );

  useEffect(() => {
    localStorage.setItem("accent-color", accentColor);
  }, [accentColor]);

  return (
    <AccentColorContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  );
}

export const useAccentColor = () => {
  return useContext(AccentColorContext);
};
