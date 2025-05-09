import {useRoutes} from "react-router-dom";
import ThemeRoutes from './routes/Router';


function App() {

     function AppRoutes() {
        return useRoutes(ThemeRoutes);
    }



    return (
        <>
            <AppRoutes/>
        </>
    )
}

export default App
