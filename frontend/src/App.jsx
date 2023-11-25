import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dictionary, Login, MainPage, Signup } from "./components/pages";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="dictionary" element={<Dictionary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
