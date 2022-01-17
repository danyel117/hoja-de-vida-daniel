import Index from './pages';
import Perfil from './pages/perfil';
import Contacto from './pages/contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='' element={<Index />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='contacto' element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
