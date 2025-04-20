import { createBrowserRouter } from "react-router"
import Home from "./Pages/Home/Home"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Historia from "./Pages/Hitoria/Historia"
import InitApp from "./InitApp"

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
                path: "/cadastro",
                element: <Cadastro />,
            },
            {
                path: "/historia",
                element: <Historia />,
            },
        ]
    }
])

export default Routes