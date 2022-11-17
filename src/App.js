import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";

import "./App.css";

function App() {
  const [color, setColor] = useState("#FFF");
  const handleColorChange = c => {
    console.log(c);
    setColor(c.rgb);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ColorPicker color={color} onChange={handleColorChange} />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
