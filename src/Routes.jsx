import { createBrowserRouter } from "react-router"
import Home from "./Pages/Home/Home"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Historia from "./Pages/Hitoria/Historia"
import InitApp from "./Pages/InitApp"
import SobreCurso from "./Pages/SobreCurso/SobreCurso"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <InitApp />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/cadastro",
                element: <Cadastro />,
            },
            {
                path: "/historia",
                element: <Historia />,
            },
            {
                path: "/sobrecurso/:id",
                element: <SobreCurso />
            }
        ]
    }
])

export default Routes