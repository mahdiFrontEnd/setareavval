import {Outlet} from "react-router-dom";
import Header from "./header/Header.tsx";
import NavigationBar from "./NavigationBar/NavigationBar.tsx";

const FullLayout = () => {
    return (
        <div className="max-w-md m-auto">
            <div className="flex flex-col overflow-hidden h-screen  text-secondary bg-mainBg">
                <Header/>
                <div className="flex-1 overflow-auto bg-contentBg rounded-t-4xl rounded-t-3xl p-6">
                    <Outlet/>
                </div>
                <NavigationBar/>
            </div>
        </div>
    );
};

export default FullLayout;