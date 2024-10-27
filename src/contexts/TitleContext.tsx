import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Package from "../../package.json";

type TitleContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};
export const TitleContext = createContext<TitleContextType>({
  title: "",
  setTitle: () => {},
});

interface TitleProviderProps {
  children: ReactNode;
}
export default function TitleProvider({ children }: TitleProviderProps) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `${Package.title} • ${title}`;
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export const useTitle = () => {
  return useContext(TitleContext);
};
