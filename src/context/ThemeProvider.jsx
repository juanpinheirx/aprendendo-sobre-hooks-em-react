/* eslint-disable react/prop-types */
import { useState } from "react";
import context from "./context";

export default function ThemeProvider({children}) {
  const [themeColor, setThemeColor] = useState("dark");
  const toggleTheme = () => {
    setThemeColor(themeColor === "dark" ? "light" : "dark");
  };
  return (
    <context.Provider //aqui é onde vai ficar nosso context api onde irá todas as informações iniciais como props que o componentes envolvidos por ele poderão ler.
      value={{
        color: themeColor,
        toggleTheme,
      }}
    >
      {" "}
      <div className={`app ${themeColor}`}>
        {children}
      </div>
    </context.Provider>
  );
}
