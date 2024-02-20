import { useState } from "react";
import Navbar from "./components/Navbar";
import Button1 from "./components/Button1";
import Gamesgrid from "./components/Gamesgrid";
function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-red-500">
          <Navbar></Navbar>
          <Button1></Button1>{" "}
        </div>
        <div className="flex ">
          <div className="hidden lg:block bg-pink-500 w-full">Aside</div>
          <div className="bg-blue-500 w-full">
            <Gamesgrid></Gamesgrid>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
