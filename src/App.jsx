// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
// import { Toaster } from "@/components/ui/toaster";

// function App() {
//   return (
//     <>
//       <Toaster />
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;





















import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
// import Stairs from "./components/Stairs"; // 👈 loader import
import Stairs from "./components/ui/Stairs";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        {/* 👇 Wrap routes inside Stairs for animation */}
        <Stairs>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Stairs>
      </BrowserRouter>
    </>
  );
}

export default App;
