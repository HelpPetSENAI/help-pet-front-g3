import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle.js'
import ComingSoonPage from './pages/CommingSoonPage/CommingSoonPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Dashboard from './pages/DashboardPage/DashboardPage.jsx'
import RegisterPetPage from './pages/RegisterPetPage/RegisterPetPage.jsx'
import ShowPetsPage from './pages/ShowPetsPage/ShowPetsPage.jsx'
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import { isAuthenticated } from './service/AuthService.js'
import SearchPage from './pages/g3-pages/SearchPage.jsx'

function ProtectedRoute({children}) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />
    }

    return children
}

function PublicRoute({children}) {
    if (isAuthenticated()) {
        return <Navigate to="/" replace />
    }

    return children
}

// Criando uma array para definir as rotas do site utilizando a função createBrowserRouter importada
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <ShowPetsPage/>
            </ProtectedRoute>
        ),
        // Error element aparece no caso de digitar um endereço que não existe, link com caminho errado ou erros de carregamento
        // Apenas essa declaração de error element aparece em caso de erro em qualquer página
        errorElement: <NotFoundPage/>
    },
    {
        path: '/home',
        element: (
            <ProtectedRoute>
                <ShowPetsPage/>
            </ProtectedRoute>
        )
    },
    {
        path: '/coming-soon',
        element: (
            <ProtectedRoute>
                <ComingSoonPage/>
            </ProtectedRoute>
        )
    },
    {
        path: '/register-pet',
        element: (
            <ProtectedRoute>
                <RegisterPetPage/>
            </ProtectedRoute>
        )
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        )
    },
    {
        path: '/show-pets',
        element: (
            <ProtectedRoute>
                <ShowPetsPage/>
            </ProtectedRoute>
        )
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login/>
            </PublicRoute>
        ),
    },
    {
        path: "/signup",
        element: (
            <PublicRoute>
                <SignUp/>
            </PublicRoute>
        )
    },{
        path: "/search-page",
        element:(
            <PublicRoute>
                <SearchPage/>
            </PublicRoute>
        )
    }
])

export default function App() {

    return (
        <>
            <GlobalStyle/>
            {/* RouterProvider fornece as rotas definidas acima para serem renderizadas através do atríbuto router */}
            <RouterProvider router={router}/>
        </>
    )
}
