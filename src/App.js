import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
    </div>
  );
}

export default App;
