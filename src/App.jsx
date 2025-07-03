import { Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import LandingPage from './pages/LandingPage';


//Inicio da aplicaco, direciona para a pagina raiz /
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  );
}

export default App;