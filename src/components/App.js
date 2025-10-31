
import React from "react";
import "../styles/App.css";
import { AuthProvider } from "./AuthContext";
import Auth from "./Auth";
const App = () => {
  return (
    <div id="main">
      <AuthProvider>
        <Auth/>
      </AuthProvider>
    </div>
  )
}

export default App
