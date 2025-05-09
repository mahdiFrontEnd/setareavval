import Home from "../pages/Home/Home.tsx";
import NotFound from "../pages/NotFound/NotFound.tsx";
import FullLayout from "../layouts/FullLayout.tsx";

/*****Auth access******/
const ThemeRoutes = [
    {
        path: '/', element: <FullLayout/>, children: [

            {path: '/', element: <Home/>},
        ],
    },
    {path: '*', element: <NotFound/>}
];

export default ThemeRoutes;
