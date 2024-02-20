import React, { useState } from "react";

function Button1() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toggle Theme
      </button>
    </div>
  );
}

export default Button1;
