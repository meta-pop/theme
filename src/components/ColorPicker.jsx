import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPicker() {
  const [display, setDisplay] = useState(false);
  const [color, setColor] = useState("#F60");
  const handleColorChange = c => {
    console.log(c.rgb);
    setColor(c.rgb);
  };
  const handleClose = () => {
    setDisplay(false);
  };
  const handleClick = () => {
    setDisplay(true);
  };
  return (
    <div>
      <header className="App-header">
        <div
          className="p-1 bg-white rounded-sm shadow-sm inline-block cursor-pointer"
          onClick={handleClick}
        >
          <div className={`w-9 h-3.5 rounded bg-[${color}]`}></div>
        </div>
        {display ? (
          <div className="absolute z-10">
            <div className="fixed inset-0" onClick={handleClose} />
            <ChromePicker color={color} onChange={handleColorChange} />
          </div>
        ) : null}
        {/* <ChromePicker color={color} onChange={handleColorChange} /> */}
      </header>
    </div>
  );
}

export default ColorPicker;
