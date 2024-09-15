import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import ChatBot from "./components/ChatBot";
import Faq from "./components/Faq";
import Translator from "./components/Translator";
// import Redirect from "./components/Redirect"; // If you have a Redirect component

// Define routes using createRoutesFromElements for better modularity
const routes = createRoutesFromElements(
  <>
    {/* <Route path="/" element={<Redirect to="/home" />} /> */}
    <Route path="/" element={<Home  />} />
    {/* <Route path="/home" element={<Home />} /> */}
    <Route path="/about" element={<About />} />
    <Route path="/chat" element={<ChatBot />} />
    <Route path="/faqs" element={<Faq />} />
    <Route path="/translate" element={<Translator />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />, // Layout component wraps all routes
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
