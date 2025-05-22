import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-main h-screen flex flex-col">
        <Layout>
          <Home/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
