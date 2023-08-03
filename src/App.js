import { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <div className="main">
      <Header
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
      />
      <Hero myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
}

export default App;