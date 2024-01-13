import { createContext, useContext } from "react";

type TMenuProps = {
  children: React.ReactNode[];
};
type TMenuContext = {
    theme: string;
  };
export const MenuContext = createContext<TMenuContext | null>(null);
export const MenuList = ({ children }: TMenuProps) => {
  return (
    <MenuContext.Provider value={{ theme: "Dark" }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};

export const MenuItem = () => {
  const { theme } = useContext(MenuContext);
  console.log(theme);
  return <div>Menu Item</div>;
};
