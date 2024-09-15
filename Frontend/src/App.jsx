// src/App.jsx
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import ChatBot from "./components/ChatBot";
import Faq from "./components/Faq";
import Translator from "./components/Translator";

// Define routes
const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/chat" element={<ChatBot />} />
    <Route path="/faqs" element={<Faq />} />
    <Route path="/translate" element={<Translator />} />
    <Route path="*" element={<NotFound />} />
  </>
);

// Create router with Layout component
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
