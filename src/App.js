import React from "react";

import "./App.css";
import "antd/dist/antd.css";

import CollectionsPage from "./components/Grid/Formadd";
import Layout from "./components/Notification/Layout";

function App() {
  return (
    <div>
      <CollectionsPage />
      <Layout />
    </div>
  );
}

export default App;
