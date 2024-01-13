import { ReactNode, createContext, useState } from "react";

type TThemContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemContext = createContext<TThemContext | undefined>(undefined);
type TThemProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: TThemProps) => {
  const [dark, setDark] = useState(false);

  const valus = {
    dark,
    setDark,
  };
  return <ThemContext.Provider value={valus}>{children}</ThemContext.Provider>;
};

export default ThemeProvider;
