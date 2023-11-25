import './App.css'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import { Login, MainPage, Signup } from './components/pages';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
