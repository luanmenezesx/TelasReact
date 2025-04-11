import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Senha from './components/senha/Senha.tsx'
import Login from './components/login/Login.tsx'
import { useNavigate, useHref, RouterProvider, createBrowserRouter, Outlet } from "react-router";
import Alunos from './components/alunos/Alunos.tsx'
import Comentarios from './components/comentarios/Comentarios.tsx'
import { HeroUIProvider } from '@heroui/react'
import Home from './components/home/Home.tsx'
import NavbarLayout from './components/Layout/NavbarLayout.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/senha',
        element: <Senha />
      },
      {
        element: <NavbarLayout/>,
        children: [
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/alunos/:idAluno',
            element: <Alunos />
          },
          {
            path: '/comentarios',
            element: <Comentarios />
          }
        ]
      }
      
    ]
  }
])
function App() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Outlet />
    </HeroUIProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)