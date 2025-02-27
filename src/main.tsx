import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Senha from './components/senha/Senha.tsx'
import Login from './components/login/Login.tsx'
import { BrowserRouter, Routes, Route, useNavigate, useHref } from "react-router";
import Alunos from './components/alunos/Alunos.tsx'
import { HeroUIProvider } from '@heroui/react'

function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/senha' element={<Senha />} />
        <Route path='/alunos/:idAluno' element={<Alunos />} />
      </Routes>
    </HeroUIProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)