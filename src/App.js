import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="bg-[#F7F7FF]">
      <div className="max-w-[1720px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;
